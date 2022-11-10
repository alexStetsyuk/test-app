import styled from 'styled-components'

const Radio = styled.input`
  background-color: #fff;
  border: 3px solid #aab4bd;
  appearance: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  transition: all ease-in 0.2s;

  &:checked {
    border-radius: 50%;
    height: 25px;
    width: 25px;
    background-color: #4ec970;
    background-size: 50%;
    border: 3px solid #4ec970;
  }
`

const CustomRadio = ({ name, label, value, isChecked, handleChange }) => {
  const handleRadioChange = (e) => {
    const { id } = e.currentTarget
    handleChange(id)
  }

  return (
    <div>
      <Radio
        type='radio'
        name={name}
        id={value}
        checked={isChecked}
        onChange={handleRadioChange}
      />
      <label htmlFor={value}>
        <span>{label}</span>
      </label>
    </div>
  )
}

export default CustomRadio
