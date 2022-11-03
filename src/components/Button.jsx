import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentWrapper } from '../shared/ContentWrapper'
import { StyledButton } from '../shared/StyledButton'

export default function Button(props) {
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
  }

  return (
    <ContentWrapper alignSelf={props.alignSelf}>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type='file'
        onChange={handleFileChange}
      />
      <StyledButton
        mgTop={props.mgTop}
        contentColor={props.contentColor}
        backgroundColor={props.backgroundColor}
        boxShadow={props.boxShadow}
        onClick={props.fileBtn ? handleFileAddClick : handleNextClick}
      >
        {props.buttonLabel}
      </StyledButton>
    </ContentWrapper>
  )
}
