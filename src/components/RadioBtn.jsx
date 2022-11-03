import { useState } from 'react'
import styled from 'styled-components'
import { StyledP } from '../shared/StyledP'

const StyledRadioBtn = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  border: 3px solid #4ec970;
  border-radius: 50%;
  background: #f6f8fd;
`

const StyledSpan = styled.span`
  content: '';
  position: absolute;
  width: 9px;
  height: 9px;
  background: #4ec970;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default function RadioBtn({ title }) {
  const [isMarkerVisible, setIsMarkerVisible] = useState(false)
  function handleClick() {
    setIsMarkerVisible(true)
  }
  return (
    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      <StyledRadioBtn onClick={handleClick}>
        {isMarkerVisible && <StyledSpan></StyledSpan>}
      </StyledRadioBtn>
      <StyledP>{title}</StyledP>
    </div>
  )
}
