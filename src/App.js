import FirstStage from './components/FirstStage'
import Header from './components/Header'
import styled from 'styled-components'
import { Route, Routes, Navigate } from 'react-router-dom'
import SecondStage from './components/SecondStage'
import ThirdStage from './components/ThirdStage'
import { Form, Formik, useFormik } from 'formik'
import SubmitButton from './components/SubmitBtn'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  const formik = useFormik({
    initialValues: {
      stageTitle: '',
      stageSubtitle: '',
      feedbackField: '',
      stageType: 'Test Task',
      checkbox: false
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <AppWrapper>
      <Header />
      <Formik>
        <form onSubmit={formik.handleSubmit}>
          <Routes>
            <Route
              path='/firstStage'
              element={
                <FirstStage
                  stageTitle={formik.values.stageTitle}
                  stageSubtitle={formik.values.stageSubtitle}
                  stageType={formik.values.stageType}
                  checkbox={formik.values.checkbox}
                  handleChange={formik.handleChange}
                />
              }
            ></Route>
            <Route path='/secondStage' element={<SecondStage />}></Route>
            <Route
              path='/thirdStage'
              element={
                <ThirdStage
                  feedbackField={formik.values.feedbackField}
                  stars={formik.values.stars}
                  handleChange={formik.handleChange}
                />
              }
            ></Route>
            <Route path='*' element={<Navigate to='/firstStage' replace />} />
          </Routes>
          <SubmitButton
            contentColor='#FFF'
            backgroundColor='#4EC970'
            buttonLabel='Next'
            mgTop='15px'
            boxShadow={true}
          />
        </form>
      </Formik>
    </AppWrapper>
  )
}

export default App
