import { useState } from 'react'
import styled from 'styled-components'

const StyledLabel = styled.div`
  position: relative;
  input {
    visibility: hidden;
  }
  span {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border: ${(props) =>
      props.checked ? '5px solid #3974F6' : '3px solid #AAB4BD'};
    border-radius: 4px;
  }
  input:checked ~ span {
    border: 5px solid #3974f6;
    &:before {
      content: '';
      position: absolute;
      height: 6px;
      width: 6px;
      top: 28%;
      left: 30%;
      background: #5a9cff;
      border-radius: 1px;
    }
  }
`

const Label = ({ checkbox, handleChange }) => {
  const [check, setCheck] = useState(checkbox)

  console.log(checkbox)
  return (
    <StyledLabel>
      <input
        type='checkbox'
        onChange={handleChange}
        checked={check}
        value={check}
      />
      <span onClick={() => setCheck((prevVal) => !prevVal)}></span>
    </StyledLabel>
  )
}

export default Label
