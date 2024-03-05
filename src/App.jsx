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

// DASHBOARD
import Dashboard from './Dashboard/Dashboard'
import AppPlugins from './Dashboard/pages/AppPlugins'
import Website from './Dashboard/pages/Website'

// TEMPLATES
import Homepage from './Templates/AyobaTemplate/Homepage/Homepage'
import Templates from './Templates/TemplateDashboard/Templates'
import TemplateViewIntro from './Templates/TemplateDashboard/TemplateViewIntro'
import TemplateEditor from './Templates/TemplateDashboard/TemplateEditor/TemplateEditor'


// PREVIEW TEMPLATE

// SOAIR TEMPLATE
import SoairHome from './Templates/TemplatePreviews/SoairAfrica/src/Components/HomePage/Home'
import SoairCourse from './Templates/TemplatePreviews/SoairAfrica/src/Components/CoursePage/Courses'
import SoairEvent from './Templates/TemplatePreviews/SoairAfrica/src/Components/EventsPage/Event';
import SoairStudent from './Templates/TemplatePreviews/SoairAfrica/src/Components/StudentPage/Student';
import SoairContact from './Templates/TemplatePreviews/SoairAfrica/src/Components/ContactPage/Contact';
import SoairEnrollPage from "./Templates/TemplatePreviews/SoairAfrica/src/Components/CoursePage/EnrollPage";

// LAWRENCE TEMPLATE
import LawrenceHome from './Templates/TemplatePreviews/Lawrence/Homepage/Homepage'
import LawrenceReservation from './Templates/TemplatePreviews/Lawrence/Homepage/Reservation'
import LawrenceAbout from './Templates/TemplatePreviews/Lawrence/Homepage/About'
import LawrenceContact from './Templates/TemplatePreviews/Lawrence/Homepage/Contact'
import LawrenceMenu from './Templates/TemplatePreviews/Lawrence/Homepage/Menu'


// EDITING TEMPLATE

// EDITING  - SOAIR
import SoairEditHome from './Templates/TemplateEditing/SoairAfrica/src/Components/HomePage/Home'
import SoairEditCourse from './Templates/TemplateEditing/SoairAfrica/src/Components/CoursePage/Courses'
import SoairEditEvent from './Templates/TemplateEditing/SoairAfrica/src/Components/EventsPage/Event';
import SoairEditStudent from './Templates/TemplateEditing/SoairAfrica/src/Components/StudentPage/Student';
import SoairEditContact from './Templates/TemplateEditing/SoairAfrica/src/Components/ContactPage/Contact';
import SoairEditEnrollPage from "./Templates/TemplateEditing/SoairAfrica/src/Components/CoursePage/EnrollPage";

// EDITING  - LAWRENCE
import LawrenceEditHome from './Templates/TemplateEditing/Lawrence/Homepage/Homepage'
import LawrenceEditReservation from './Templates/TemplateEditing/Lawrence/Homepage/Reservation'
import LawrenceEditAbout from './Templates/TemplateEditing/Lawrence/Homepage/About'
import LawrenceEditContact from './Templates/TemplateEditing/Lawrence/Homepage/Contact'
import LawrenceEditMenu from './Templates/TemplateEditing/Lawrence/Homepage/Menu'



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
          <Route path='appplugins' element={ <AppPlugins/> } />
          <Route path='website' element={ <Website/> } />
          <Route path='website/templates' element={ <Templates/> } />
          <Route path='templateviewintro' element={ <TemplateViewIntro/> } />
          <Route path='templateeditor' element={ <TemplateEditor/> } />

          {/* TEMPLATES */}
          <Route path='ayobatemplate' element={ <Homepage/> } />


          {/* Preview Template */}

          {/* SOAIR TEMPLATE */}
          <Route path='SoairHome' element={ <SoairHome/> } />
          <Route path='SoairCourse' element={ <SoairCourse/> } />
          <Route path='SoairEvent' element={ <SoairEvent/> } />
          <Route path='SoairStudent' element={ <SoairStudent/> } />
          <Route path='SoairContact' element={ <SoairContact/> } />
          <Route path='SoairEnrollPage' element={ <SoairEnrollPage/> } />

          {/* LAWRENCE TEMPLATE */}
          <Route path='LawrenceHome' element={ <LawrenceHome /> } />
          <Route path='LawrenceReservation' element={ <LawrenceReservation /> } />
          <Route path='/LawrenceAbout' element={ <LawrenceAbout /> } />
          <Route path='/LawrenceContact' element={ <LawrenceContact /> } />
          <Route path='LawrenceMenu' element={ <LawrenceMenu /> } />

        {/* Editing Template */}

        {/* SOAIR TEMPLATE */}
          <Route path='SoairEditHome' element={ <SoairEditHome/> } />
          <Route path='SoairEditCourse' element={ <SoairEditCourse/> } />
          <Route path='SoairEditEvent' element={ <SoairEditEvent/> } />
          <Route path='SoairEditStudent' element={ <SoairEditStudent/> } />
          <Route path='SoairEditContact' element={ <SoairEditContact/> } />
          <Route path='SoairEditEnrollPage' element={ <SoairEditEnrollPage/> } />

        {/* LAWRENCE TEMPLATE */}
          <Route path='LawrenceEditHome' element={ <LawrenceEditHome /> } />
          <Route path='LawrenceEditReservation' element={ <LawrenceEditReservation /> } />
          <Route path='LawrenceEditAbout' element={ <LawrenceEditAbout /> } />
          <Route path='LawrenceEditContact' element={ <LawrenceEditContact /> } />
          <Route path='LawrenceEditMenu' element={ <LawrenceEditMenu /> } />

         </Routes>
      </Router>
    </>
  )
}

export default App