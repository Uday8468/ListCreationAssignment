import React, { useEffect, useState } from 'react'
import { listCreationAPI } from '../utils/utils'
import Loader from './components/Loader/loader'
import { AlignDiv, CancelBTn, CancelBtn, CheckBoxElement, CreateNewListBtn, EachListAlignCont, EachListContainer, ErrorMessage, FooterCont, HeaderContainer, ListCreationHeading, ListHeadAlignCont, ListHeading, TotalListContainer, TotalLoaderContainer } from './ListCreation.styled'
import ListComp from './components/ListComp/ListComp'

const ListCreation = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        list_1: [],
        list_2: []
    })
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);
    const [listCount, setListCount] = useState(2)
    const [errorStatus,setErrorStatus]= useState(false)
    const [selectedList,setSelectedList] = useState([0,1])
    const [started,setStarted] = useState(false)
    const [createBtnClicked,setCreateBtnClicked] = useState(false)

    const intialCall = async () => {
        let result = await listCreationAPI()
        setLoading(false)
        let array = result?.lists
        let list_1 = []
        let list_2 = []

        array.map((each) => {
            if (each?.list_number === 1) {
                list_1.push(each)
            } else {
                list_2.push(each)
            }
        })
        setData({ ...data, list_1, list_2 })
    }
    // useEffect(() => {
    //     if (data?.list_1.length > 0) {
    //         let jsonString = JSON.stringify(data)
    //         localStorage.setItem('intialData', jsonString);
    //         localStorage.setItem('listCount', listCount);
            
    //     }

    // }, [data])
    const handleCheckboxChange = (checkboxValue) => {
        let updatedCheckboxes;
        if (checkedCheckboxes.includes(checkboxValue)) {
            updatedCheckboxes = checkedCheckboxes.filter((value) => value !== checkboxValue);
        } else {
            updatedCheckboxes = [...checkedCheckboxes, checkboxValue];
        }
        setCheckedCheckboxes(updatedCheckboxes);
    };
    useEffect(() => {
        intialCall()
    }, [])
    const creatingNewList = () => {
        if(checkedCheckboxes.length !== 2){
         setErrorStatus(true)
         setTimeout(() => {
            setErrorStatus(false)
         }, 3000);
        }else{
          setCreateBtnClicked(true)
          setStarted(true)
        //   let jsonString = JSON.stringify(data)
        //     localStorage.setItem('intialData', jsonString);
        //     localStorage.setItem('listCount', listCount);
          
          setListCount(listCount + 1)
          let selected = []
          checkedCheckboxes.map(each => {
            let value = parseInt(each.split("checkbox")[1])
            selected.push(value)
          })
          selected.push(listCount + 1)
          let newSelected = selected.sort()
          setSelectedList(newSelected)
          setData({...data,[`list_${listCount + 1}`]:[]})
        }
        
    }
    const renderListContainers = (param) => {
        return [...Array(param)].map((_, index) => {
            let check = started ? selectedList.includes(index+1) : listCount
             return (
                check && (
                    <AlignDiv key={index} style={{order:index+1 === 2 && 2}}>
                    <EachListContainer>
                        <ListHeadAlignCont>
                            <CheckBoxElement type="checkbox" onChange={() => handleCheckboxChange(`checkbox${index + 1}`)} checked={checkedCheckboxes.includes(`checkbox${index + 1}`)} />
                            <ListHeading>{`List ${index + 1} (${data?.[`list_${index + 1}`]?.length || 0})`}</ListHeading>
                        </ListHeadAlignCont>
                    
                        {data?.[`list_${index + 1}`]?.map((each, innerIndex) => (
                            <ListComp key={innerIndex} details={each} createBtnClicked={createBtnClicked} listIndex={index+1} data={data} setData={setData} listCount={listCount} selectedList={selectedList}/>
                        ))}
                    </EachListContainer>
                </AlignDiv>
                )
              
             )
           
    });
    };
    const updateTheList = () => {
        setCreateBtnClicked(false)
        setCheckedCheckboxes([])
        let jsonString = JSON.stringify(data)
        localStorage.setItem("intialData",jsonString)
        localStorage.setItem('listCount', listCount);
        setStarted(false)
    }
    // const cancelTheOperation = () => {
    //     setCreateBtnClicked(false)
    //     setCheckedCheckboxes([])
    //     let storedJsonString = localStorage.getItem("intialData")
    //     let array = JSON.parse(storedJsonString);
    //     let objectLength = Object.keys(array).length;
    //     setData(array)
    //     setListCount(objectLength)
    // }
    return (
        loading ? (
            <TotalLoaderContainer>
                <Loader />
            </TotalLoaderContainer>
        ) : (
            <>
                <TotalListContainer>
                    {!createBtnClicked && (
                        <HeaderContainer>
                        <ListCreationHeading>List Creation</ListCreationHeading>
                        <CreateNewListBtn onClick={creatingNewList}>Create new List </CreateNewListBtn>
                        {errorStatus && (
                        <ErrorMessage> *You should select exactly 2 lists to create new list</ErrorMessage>

                        )}
                    </HeaderContainer>
                    )}
                    
                    <EachListAlignCont>
                        {data?.list_1.length > 0 && (
                            <>
                                {renderListContainers(listCount)}
                            </>


                        )}
                    </EachListAlignCont>
                    {createBtnClicked && (
                         <FooterCont>
                            <CancelBtn>Cancel </CancelBtn>
                         <CreateNewListBtn onClick={updateTheList}>Update </CreateNewListBtn>
                         
                     </FooterCont>
                    )}


                </TotalListContainer>
            </>
        )

    )
}

export default ListCreation
