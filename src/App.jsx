import './App.css'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Homepage/Header'
import QuestionOne from './Auth/AuthQues/QuestionOne'
import QuestionTwo from './Auth/AuthQues/QuestionTwo'
import QuestionThree from './Auth/AuthQues/QuestionThree'
import QuestionFour from './Auth/AuthQues/QuestionFour'
import QuestionFive from './Auth/AuthQues/QuestionFive'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Header /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='signup' element={ <Signup /> } />
          <Route path='questionone' element={ <QuestionOne/> } />
          <Route path='questiontwo' element={ <QuestionTwo/> } />
          <Route path='questionthree' element={ <QuestionThree/> } />
          <Route path='questionfour' element={ <QuestionFour/> } />
          <Route path='questionfive' element={ <QuestionFive/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
