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
import Dashboard from './Dashboard/Dashboard'

// TEMPLATES
import Homepage from './Templates/AyobaTemplate/Homepage/Homepage'

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


          {/* DASHBOARD ROUTES */}
          <Route path='dashboard' element={ <Dashboard/> } />

          {/* TEMPLATES */}
          <Route path='ayobatemplate' element={ <Homepage/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
