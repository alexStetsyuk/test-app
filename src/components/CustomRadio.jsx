import { ContentWrapper } from '../shared/ContentWrapper'
import Radio from '../shared/Radio'

const CustomRadio = ({ name, label, value, isChecked, handleChange }) => {
  const handleRadioChange = (e) => {
    const { id } = e.currentTarget
    handleChange(id)
  }

  return (
    <ContentWrapper alignItems='center' gap='0.7rem' color='#828282'>
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
    </ContentWrapper>
  )
}

export default CustomRadio
