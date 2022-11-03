import styled from 'styled-components'

const AddMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 2.7rem;
  height: 2.25rem;
  border: 2px dashed #aab4bd;
  border-radius: 4px;
  background: #ffffff;
  &::before {
    content: '';
    position: absolute;
    width: 0.9rem;
    height: 2px;
    background: #ccd2e3;
    transform: rotate(90deg);
    border-radius: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0.9rem;
    height: 2px;
    background: #ccd2e3;
    border-radius: 2px;
  }
`

export default function AddMemberBtn() {
  return <AddMember onClick={() => console.log('add')}></AddMember>
}
