import styled from 'styled-components'

const StyledInput = styled.input`
  border: none;
  border-radius: 4px;
  background-color: #ecf0f5;
  width: 10rem;
  &:focus {
    outline: none;
    padding-left: 3px;
  }
`

export default function Input({
  value,
  changeHandler,
  handleAdd,
  blurHandler
}) {
  return (
    <StyledInput
      type='text'
      value={value}
      onChange={changeHandler}
      autoFocus
      onBlur={value.trim().length === 0 ? blurHandler : handleAdd}
    />
  )
}
