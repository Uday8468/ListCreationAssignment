import styled, { keyframes } from 'styled-components'


export const TotalListCont = styled.div`
width:245px;
height:${(props) => (props.status === "true" ? '120px' : '90px')};
background:white;
display:flex;
flex-direction:column;
justify-content:center;
border-radius: 12px;
border: 1px solid #808080;
gap:5px;
`
export const TitleCont = styled.div`
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
color:black;
`

export const Description = styled.div`
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
color:#808080;
`
export const TextAlignCont = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-left:20px;
`
export const IconCont = styled.div`
width:20px;
height:20px;
align-self: flex-end;
margin-right:20px;
cursor:pointer;
`
export const IconImg = styled.img`
height:20px;
width:20px;
`
export const TotalLogoContainer = styled.div`
display:flex;
justify-content:space-between;
`