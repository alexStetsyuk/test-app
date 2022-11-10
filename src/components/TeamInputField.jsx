import styled from 'styled-components'

const TeamField = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  background: #ffffff;
  border: 1px solid #ccd2e3;
  border-radius: 4px;
  width: 390px;
  height: 100%;
  padding: 5px;
`

export default function TeamInputField({ children }) {
  return <TeamField>{children}</TeamField>
}
