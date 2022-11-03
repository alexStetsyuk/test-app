import { useNavigate, useLocation } from 'react-router-dom'
import { ContentWrapper } from '../shared/ContentWrapper'
import { StyledButton } from '../shared/StyledButton'

export default function SubmitButton(props) {
  let buttonLabel = ''
  const navigate = useNavigate()
  const location = useLocation()

  const pathName = location.pathname.slice(1)
  if (pathName === 'firstStage' || pathName === 'secondStage') {
    buttonLabel = 'Next'
  } else {
    buttonLabel = 'Create Stage'
  }
  function handleNextClick() {
    if (pathName === 'firstStage') {
      navigate('/secondStage')
    } else if (pathName === 'secondStage') {
      navigate('/thirdStage')
    }
  }
  return (
    <ContentWrapper justifyContent='flex-end'>
      <StyledButton
        mgTop={props.mgTop}
        contentColor={props.contentColor}
        backgroundColor={props.backgroundColor}
        boxShadow={props.boxShadow}
        onClick={handleNextClick}
      >
        {buttonLabel}
      </StyledButton>
    </ContentWrapper>
  )
}
