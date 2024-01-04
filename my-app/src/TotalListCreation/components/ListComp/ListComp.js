import React, { useEffect } from 'react'
import { Description, IconCont, IconImg, TextAlignCont, TitleCont, TotalListCont, TotalLogoContainer } from './ListComp.styled'
import icon from "../../Icons/leftIcon.png"
let newarray = []
const ListComp = (props) => {
  const { details, createBtnClicked, listIndex, data, setData, listCount } = props;
  const { name, description, id,list_number } = details
  const moveToNewList = (value) => {
    let filterList = data?.[`list_${listIndex}`].filter((each) => each.id !== value)
    let removedEl = data?.[`list_${listIndex}`].filter((each) => each.id === value)
    newarray.push(...removedEl)
    
    setData({ ...data, [`list_${listIndex}`]: filterList, [`list_${listCount}`]: newarray })
  }
  const moveToOldLeftList = (value) => {
    if(listCount === listIndex){
         let newList = data?.[`list_${listIndex}`].filter((each) => each.id !== value)
         let newRemovedEl = data?.[`list_${listIndex}`].filter((each) => each.id === value)
         data?.[`list_${1}`].push(...newRemovedEl)
         newarray = []
         setData({ ...data,[`list_${listIndex}`]: newList })
      
    }
  }
  const moveToOldRightList = (value) => {
    if(listCount === listIndex){
      let newList = data?.[`list_${listIndex}`].filter((each) => each.id !== value)
      let newRemovedEl = data?.[`list_${listIndex}`].filter((each) => each.id === value)
      data?.[`list_${2}`].push(...newRemovedEl)
      newarray = []
      setData({ ...data,[`list_${listIndex}`]: newList })
   
 }
  }
  return (
    <TotalListCont status={createBtnClicked.toString()}>
      <TextAlignCont>
        <TitleCont>{name}</TitleCont>
        <Description>{description}</Description>
      </TextAlignCont>

      {createBtnClicked && (
        <>
          <TotalLogoContainer style={{justifyContent:listCount !== listIndex && "flex-end"}}>

          {listCount === listIndex && (
              <IconCont onClick={() => {
                if(listCount === listIndex){
                  moveToOldLeftList(id)
                }
               
                // moveToNewList(id)
              }} style={{marginLeft:"20px"}}>

                <IconImg draggable={false} src={icon} />
              </IconCont>
            )}
            <IconCont onClick={() => {
              if(listCount !== listIndex){
                console.log("in right")
                moveToNewList(id)
              }else{
              moveToOldRightList(id)
              }
              
            }}>

              <IconImg draggable={false} src={icon} style={{ transform: listIndex % 2 !== 0 && "rotate(180deg)" }} />
            </IconCont>
            
          </TotalLogoContainer>


        </>

      )}

    </TotalListCont>
  )
}

export default ListComp
