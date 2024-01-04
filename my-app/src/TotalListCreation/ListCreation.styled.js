import styled, { keyframes } from 'styled-components'

export const TotalLoaderContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
`

export const TotalListContainer = styled.div`
width:100%;
height:100vh;
display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
gap:15px;
height: 20%;
`

export const ListCreationHeading = styled.h1`
color: black;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
`


export const CreateNewListBtn = styled.button`
background: #3396FF;
    padding: 6px;
    border-radius: 5px;
    color: white;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
border: none;
`
export const EachListAlignCont = styled.div`
align-self: flex-start;
margin-left:25px;
height:80%;
display: flex;
    gap: 30px;
`
export const EachListContainer = styled.div`
width:275px;
background:#B0E5F4;
border-radius: 10px;
display: flex;
    flex-direction: column;
    align-items:center;
    gap: 5px;
    border-top-right-radius: unset;
`

export const ListHeading = styled.div`
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
color:black;
align-self: flex-start;
    margin-left: 25px;
    margin-top:40px;
    margin-bottom:20px;
`
export const AlignDiv = styled.div`
height: 100%;
    overflow: scroll;
    overflow-x: hidden;
`