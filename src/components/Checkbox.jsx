import { StyledP } from '../shared/StyledP'
import { useState } from 'react'
import StyledCheckboxComponent from './StyledCheckboxComponent'
import { ContentWrapper } from '../shared/ContentWrapper'

export default function Checkbox({ name }) {
  const [checked, setChecked] = useState(false)

  function checkedHandler() {
    setChecked((prevState) => !prevState)
  }
  return (
    <ContentWrapper
      onClick={checkedHandler}
      alignItems='center'
      gap='5px'
      cursor='pointer'
    >
      <StyledCheckboxComponent checked={checked} />
      <StyledP>{name}</StyledP>
    </ContentWrapper>
  )
}
