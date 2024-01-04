import React from 'react'
import { Description, TextAlignCont, TitleCont, TotalListCont } from './ListComp.styled'

const ListComp = (props) => {
  const {details} = props;
  const {name,description} = details
  return (
    <TotalListCont>
      <TextAlignCont>
      <TitleCont>{name}</TitleCont>
      <Description>{description}</Description>
      </TextAlignCont>
      
    </TotalListCont>
  )
}

export default ListComp
