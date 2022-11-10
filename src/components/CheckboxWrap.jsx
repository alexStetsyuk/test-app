import { ContentWrapper } from '../shared/ContentWrapper'
import StyledCheckboxComponent from './StyledCheckboxComponent'
import { useState } from 'react'

const CheckboxWrap = () => {
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
    </ContentWrapper>
  )
}

export default CheckboxWrap
