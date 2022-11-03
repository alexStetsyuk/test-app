import styled from 'styled-components'

export const StyledSelect = styled.select`
  align-self: ${(props) => props.alignSelf};
  padding: 12px 20px 12px 11px;
  width: ${(props) => props.width || '40rem'};
  background: #ffffff;
  border: 1px solid #ecf0f5;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  color: #505b67;
  &:focus {
    outline: none;
    background: #ffffff;
  }
  option {
    margin-top: 10px;
  }
`
