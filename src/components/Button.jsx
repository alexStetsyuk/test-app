import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentWrapper } from '../shared/ContentWrapper'
import Position from '../shared/Position'
import { StyledButton } from '../shared/StyledButton'
import DeleteMemberIcon from '../icons/DeleteMemberIcon'

export default function Button(props) {
  const [fileName, setFileName] = useState('')
  const inputRef = useRef()
  const navigate = useNavigate()
  function handleFileAddClick() {
    inputRef.current.click()
  }

  function handleNextClick() {
    navigate(`/${props.moveTo}`)
  }

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0]
    if (!fileObj) {
      return
    }
    setFileName(event.target.files[0].name)
  }

  return (
    <ContentWrapper alignSelf={props.alignSelf}>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type='file'
        onChange={handleFileChange}
      />
      <Position position='relative'>
        <StyledButton
          disabled={props.disabled}
          mgTop={props.mgTop}
          contentColor={props.contentColor}
          backgroundColor={props.backgroundColor}
          boxShadow={props.boxShadow}
          onClick={props.fileBtn ? handleFileAddClick : handleNextClick}
        >
          {props.buttonLabel}
        </StyledButton>
      </Position>
      <Position
        alignItems='center'
        position='absolute'
        transform='translate(180px, 7px)'
        gap='5px'
      >
        <ContentWrapper>{fileName}</ContentWrapper>
        <ContentWrapper
          onClick={() => setFileName('')}
          style={{ display: !fileName && 'none' }}
          cursor='pointer'
        >
          <DeleteMemberIcon />
        </ContentWrapper>
      </Position>
    </ContentWrapper>
  )
}
