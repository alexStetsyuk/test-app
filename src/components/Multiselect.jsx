import { ContentWrapper } from '../shared/ContentWrapper'
import CustomSelect from './CustomSelect'
import Position from '../shared/Position'
import Arrow from '../icons/Arrow'
import { useState } from 'react'

const Multiselect = ({ right, width, height, titles, top, disableTitle }) => {
  const [multiselectChecked, setMultiselectChecked] = useState(false)
  const [isDisable, setIsDisable] = useState(disableTitle)
  const [currentTitleId, setCurrentTitleId] = useState(0)
  function multiselectCheckedHandler() {
    setMultiselectChecked((prevState) => !prevState)
  }

  function handleChangeTitle(id) {
    setCurrentTitleId(id)
    setIsDisable(null)
    console.log(titles[id])
  }
  const selects = titles.map((title, idx) => {
    return (
      <CustomSelect
        key={idx}
        id={idx}
        title={title}
        handleChangeTitle={handleChangeTitle}
        checkedHandler={multiselectCheckedHandler}
      />
    )
  })
  return (
    <ContentWrapper flexDirection='column'>
      <Position
        alignItems='center'
        position='relative'
        backgroundColor='white'
        width={width}
        height={height}
        border='1px solid #ecf0f5'
        borderRadius='4px'
        cursor='pointer'
        onClick={multiselectCheckedHandler}
      >
        <ContentWrapper padding='0.8rem'>
          {multiselectChecked === false && isDisable ? (
            <ContentWrapper color='#AAB4BD'>{disableTitle}</ContentWrapper>
          ) : (
            titles[currentTitleId]
          )}
        </ContentWrapper>
        <Position position='absolute' right={right}>
          <Arrow rotate={multiselectChecked ? 'rotate(180deg)' : null} />
        </Position>
      </Position>
      {multiselectChecked && (
        <Position
          position='absolute'
          backgroundColor='#fff'
          flexDirection='column'
          width={width}
          zIndex='1'
          border='1px solid #ecf0f5'
          top={top}
          padding='0.5rem'
        >
          {selects}
        </Position>
      )}
    </ContentWrapper>
  )
}

export default Multiselect
