import { useState } from 'react'
import { StyledCheckbox } from '../shared/StyledCheckbox'

export default function StyledCheckboxComponent() {
  const [checked, setChecked] = useState(false)

  function checkedHandler() {
    setChecked((prevState) => !prevState)
  }
  return <StyledCheckbox checked={checked} onClick={checkedHandler} />
}
