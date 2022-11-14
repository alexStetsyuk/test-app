import CustomRadio from './CustomRadio'
import { useState } from 'react'
import { ContentWrapper } from '../shared/ContentWrapper'

const RadioGroup = ({ titles, flexDirection, gap }) => {
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
    <ContentWrapper
      width='100%'
      justifyContent='space-around'
      flexDirection={flexDirection}
      gap={gap}
    >
      {group}
    </ContentWrapper>
  )
}

export default RadioGroup
