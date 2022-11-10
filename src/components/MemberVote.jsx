import { StyledP } from '../shared/StyledP'
import StyledCheckboxComponent from './StyledCheckboxComponent'
import { HeaderThree } from '../shared/HeaderThree'
import { ContentWrapper } from '../shared/ContentWrapper'
import { useState } from 'react'

export default function MemberVote({ name }) {
  const [checked, setChecked] = useState(false)

  function checkedHandler() {
    setChecked((prevState) => !prevState)
  }

  return (
    <ContentWrapper
      width='572px'
      height='36px'
      backgroundColor='#ffffff'
      borderRadius='4px'
      justifyContent='space-between'
      alignItems='center'
      padding='10px'
      onClick={checkedHandler}
      cursor='pointer'
    >
      <HeaderThree>{name}</HeaderThree>
      <ContentWrapper display='flex' alignItems='center' gap='5px'>
        <StyledCheckboxComponent checked={checked} />
        <StyledP>Veto</StyledP>
      </ContentWrapper>
    </ContentWrapper>
  )
}
