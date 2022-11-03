import styled from 'styled-components'

export const StyledInput = styled.input`
  padding: 12px 14px 12px 16px;
  width: ${(props) => props.width || '40rem'};
  background: #ffffff;
  border: 1px solid #ecf0f5;
  border-radius: 4px;
  &::placeholder {
    font-size: 14px;
    line-height: 18px;
    color: #aab4bd;
  }
  &:focus {
    outline: none;
  }
`
