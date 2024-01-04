import React, { useEffect, useState } from 'react'
import { listCreationAPI } from '../utils/utils'
import Loader from './components/Loader/loader'
import { CreateNewListBtn, EachListAlignCont, EachListContainer, HeaderContainer, ListCreationHeading, TotalListContainer, TotalLoaderContainer } from './ListCreation.styled'

const ListCreation = () => {
    const [loading, setLoading] = useState(true)
    const [data,setData] = useState({
        list_1:[],
        list_2:[]
    })

    const intialCall = async () => {
        let result = await listCreationAPI()
        setLoading(false)
        let array = result?.lists
        let list_1 = []
        let list_2 = []
        array.map((each) => {
            if(each?.list_number === 1){
                list_1.push(each)
            }else{
                list_2.push(each)
            }
        })
        setData({...data,list_1,list_2})
    }
   
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
                    <EachListContainer></EachListContainer>
                    </EachListAlignCont>
                  

                </TotalListContainer>
            </>
        )

    )
}

export default ListCreation
