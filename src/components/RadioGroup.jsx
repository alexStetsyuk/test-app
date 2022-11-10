import CustomRadio from './CustomRadio'
import { useState } from 'react'

const RadioGroup = ({ titles }) => {
  const [selectedInput, setSelectedInput] = useState('')

  const handleChange = (inputValue) => {
    setSelectedInput(inputValue)
  }

  const group = titles.map((title, idx) => {
    return (
      <CustomRadio
        key={idx}
        name={title}
        value={title}
        label={title}
        isChecked={selectedInput === title}
        handleChange={handleChange}
      />
    )
  })

  return (
    <>
      <div>{group}</div>
    </>
  )
}

export default RadioGroup
