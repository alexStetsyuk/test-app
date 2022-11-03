import { useState } from 'react'
import Button from './Button'
import TeamInputField from './TeamInputField'
import TeamMember from './TeamMember'
import AddMemberBtn from './AddMemberBtn'
import RadioBtn from './RadioBtn'
import MemberVote from './MemberVote'
import { HrLine } from '../shared/HrLine'
import { HeaderThree } from '../shared/HeaderThree'
import { StyledSelect } from '../shared/StyledSelect'
import { CountWrapper } from '../shared/CountWrapper'
import { ContentWrapper } from '../shared/ContentWrapper'

export default function SecondStage() {
  const [count, setCount] = useState(1)

  function addHandler() {
    setCount((prevValue) => prevValue + 1)
  }

  function subtractHandler() {
    setCount((prevValue) => {
      if (prevValue !== 0) {
        return prevValue - 1
      }
      return 0
    })
  }

  return (
    <ContentWrapper display='flex' flexDirection='column'>
      <ContentWrapper
        display='flex'
        width='900px'
        flexDirection='column'
        alignItems='center'
        gap='1rem'
        backgroundColor='#f6f8fd'
      >
        <HeaderThree marginTop='2rem'>Team</HeaderThree>
        <ContentWrapper display='flex' gap='10px'>
          <StyledSelect width='250px'>
            <option value='Design'>Design</option>
          </StyledSelect>
          <CountWrapper>
            <button onClick={subtractHandler}>-</button>
            <p>{count}</p>
            <button onClick={addHandler}>+</button>
          </CountWrapper>
          <StyledSelect width='269px'>
            <option value='' disabled selected style={{ color: '#AAB4BD' }}>
              Who to send the request to
            </option>
            <option value='Design'>Design</option>
          </StyledSelect>
        </ContentWrapper>
        <ContentWrapper display='flex' gap='10px'>
          <StyledSelect width='250px' alignSelf='flex-start'>
            <option value='Specific'>Specific</option>
          </StyledSelect>
          <TeamInputField>
            <TeamMember name='Kathryn Murphy' />
            <TeamMember name='Darrell Steward' />
            <TeamMember name='Darlene Robertson' />
            <AddMemberBtn />
          </TeamInputField>
        </ContentWrapper>
        <ContentWrapper display='flex' gap='21.5rem'>
          <Button fileBtn={false} buttonLabel='Add' alignSelf='flex-end' />
          <Button
            fileBtn={false}
            contentColor='#FFF'
            backgroundColor='#4EC970'
            buttonLabel='Send Request'
            mgTop='15px'
            boxShadow={true}
          />
        </ContentWrapper>
        <HrLine />
        <ContentWrapper
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <HeaderThree marginTop='1rem'>Votes</HeaderThree>
          <ContentWrapper
            width='615px'
            alignItems='center'
            justifyContent='space-around'
            margin='1.5rem 0 0 0'
          >
            <RadioBtn title='All votes' />
            <RadioBtn title='Majority' />
            <RadioBtn title='Veto' />
          </ContentWrapper>
          <ContentWrapper
            display='flex'
            flexDirection='column'
            margin='2rem'
            gap='5px'
          >
            <MemberVote name='Kathryn Murphy' />
            <MemberVote name='Darrell Steward' />
            <MemberVote name='Darlene Robertson' />
          </ContentWrapper>
        </ContentWrapper>
      </ContentWrapper>
      {/* <Button
        fileBtn={false}
        contentColor='#FFF'
        backgroundColor='#4EC970'
        buttonLabel='Next'
        alignSelf='flex-end'
        mgTop='15px'
        moveTo='thirdStage'
        boxShadow={true}
      /> */}
    </ContentWrapper>
  )
}
