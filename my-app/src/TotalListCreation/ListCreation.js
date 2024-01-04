import React, { useEffect, useState } from 'react'
import { listCreationAPI } from '../utils/utils'
import Loader from './components/Loader/loader'
import { AlignDiv, CreateNewListBtn, EachListAlignCont, EachListContainer, HeaderContainer, ListCreationHeading, ListHeading, TotalListContainer, TotalLoaderContainer } from './ListCreation.styled'
import ListComp from './components/ListComp/ListComp'

const ListCreation = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        list_1: [],
        list_2: []
    })

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
    useEffect(() => {
        if(data?.list_1.length > 0){
            let jsonString = JSON.stringify(data)
            localStorage.setItem('intialData', jsonString);
            localStorage.setItem('listCount', 2);
        }

    },[data])

    useEffect(() => {
        intialCall()
    }, [])
    return (
        loading ? (
            <TotalLoaderContainer>
                <Loader />
            </TotalLoaderContainer>
        ) : (
            <>
                <TotalListContainer>
                    <HeaderContainer>
                        <ListCreationHeading>List Creation</ListCreationHeading>
                        <CreateNewListBtn>Create new List </CreateNewListBtn>
                    </HeaderContainer>
                    <EachListAlignCont>
                        {data?.list_1.length > 0 && (
                            <>
                            <AlignDiv>
                             <EachListContainer>
                                    <ListHeading>{`List 1 (${data?.list_1.length})`}</ListHeading>
                                    {data?.list_1.map((each, index) =>
                                        <ListComp key={index} details={each} />
                                    )}

                                </EachListContainer>
                                </AlignDiv>
                                <AlignDiv>
                                <EachListContainer>
                                       <ListHeading>{`List 2 (${data?.list_2.length})`}</ListHeading>
                                       {data?.list_2.map((each, index) =>
                                           <ListComp key={index} details={each} />
                                       )}
   
                                   </EachListContainer>
                                   </AlignDiv>
                            </>


                        )}

                    </EachListAlignCont>


                </TotalListContainer>
            </>
        )

    )
}

export default ListCreation
