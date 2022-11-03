import styled from 'styled-components'
import { StyledSelect } from '../shared/StyledSelect'

const Span = styled.span`
  position: absolute;
  font-weight: 7px;
  font-weight: 300;
  font-size: 9px;
  line-height: 16px;
  color: #aab4bd;
  left: 17px;
`

export default function Select({ stageType, handleChange }) {
  return (
    <div style={{ position: 'relative' }}>
      <Span>Stage Type</Span>
      <StyledSelect
        name='stageType'
        id='stageType'
        value={stageType}
        onChange={handleChange}
      >
        <option value='Test Task'>Test Task</option>
        <option value='Approval'>Approval</option>
        <option value='Accepted'>Accepted</option>
      </StyledSelect>
    </div>
  )
}
