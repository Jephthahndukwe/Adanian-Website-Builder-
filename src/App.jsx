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
import ManualDashboard from './ManualEditSite/ManualDashboard'

// TEMPLATES
import Homepage from './Templates/AyobaTemplate/Homepage/Homepage'
import Templates from './Templates/TemplateDashboard/Templates'
import TemplateViewIntro from './Templates/TemplateDashboard/TemplateViewIntro'
import TemplateEditor from './Templates/TemplateDashboard/TemplateEditor/TemplateEditor'


// PREVIEW TEMPLATE

// SOAIR AFRICA TEMPLATE
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

// ANN SIMON TEMPLATE
import DayDreamHome from './Templates/TemplatePreviews/Day Dream/Homepage/Homepage'
import DayDreamLookbook from './Templates/TemplatePreviews/Day Dream/Homepage/Lookbook'
import DayDreamAbout from './Templates/TemplatePreviews/Day Dream/Homepage/About'
import DayDreamContact from './Templates/TemplatePreviews/Day Dream/Homepage/Contact'
import DayDreamSales from './Templates/TemplatePreviews/Day Dream/Homepage/Sales'

// MAYA NELSON TEMPLATE
import MayaNelsonHome from './Templates/TemplatePreviews/Maya Nelson/Homepage/Homepage'
import MayaNelsonResume from './Templates/TemplatePreviews/Maya Nelson/Homepage/Resume'
import MayaNelsonProjects from './Templates/TemplatePreviews/Maya Nelson/Homepage/Projects'
import MayaNelsonContact from './Templates/TemplatePreviews/Maya Nelson/Homepage/Contact'

// Travel Better TEMPLATE
import TravelBetterHome from './Templates/TemplatePreviews/Travel Better/Homepage/Homepage'
import TravelBetterAbout from './Templates/TemplatePreviews/Travel Better/Homepage/About'
import TravelBetterPackage from './Templates/TemplatePreviews/Travel Better/Homepage/Package'
import TravelBetterBook from './Templates/TemplatePreviews/Travel Better/Homepage/Book'


// EDITING TEMPLATE

// EDITING  - SOAIR AFRICA
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

// EDITING  - ANN SIMON
import DayDreamEditHome from './Templates/TemplateEditing/Day Dream/Homepage/Homepage'
import DayDreamEditLookbook from './Templates/TemplateEditing/Day Dream/Homepage/Lookbook'
import DayDreamEditAbout from './Templates/TemplateEditing/Day Dream/Homepage/About'
import DayDreamEditContact from './Templates/TemplateEditing/Day Dream/Homepage/Contact'
import DayDreamEditSales from './Templates/TemplateEditing/Day Dream/Homepage/Sales'

// EDITING  -  MAYA NELSON
import MayaNelsonEditHome from './Templates/TemplateEditing/Maya Nelson/Homepage/Homepage'
import MayaNelsonEditResume from './Templates/TemplateEditing/Maya Nelson/Homepage/Resume'
import MayaNelsonEditProjects from './Templates/TemplateEditing/Maya Nelson/Homepage/Projects'
import MayaNelsonEditContact from './Templates/TemplateEditing/Maya Nelson/Homepage/Contact'

// EDITING  -  TRAVEL  BETTER
import TravelBetterEditHome from './Templates/TemplateEditing/Travel Better/Homepage/Homepage'
import TravelBetterEditAbout from './Templates/TemplateEditing/Travel Better/Homepage/About'
import TravelBetterEditPackage from './Templates/TemplateEditing/Travel Better/Homepage/Package'
import TravelBetterEditBook from './Templates/TemplateEditing/Travel Better/Homepage/Book'




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
          <Route path='manualsite' element={ <ManualDashboard/> } />

          {/* TEMPLATES */}
          <Route path='ayobatemplate' element={ <Homepage/> } />


          {/* Preview Template */}

          {/* SOAIR AFRICA TEMPLATE */}
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

          {/* ANN SIMON TEMPLATES */} {/* FASHION */}
          <Route path='DayDreamHome' element={ <DayDreamHome/> } />
          <Route path='DayDreamLookbook' element={ <DayDreamLookbook/> } />
          <Route path='DayDreamAbout' element={ <DayDreamAbout /> } />
          <Route path='DayDreamContact' element={ <DayDreamContact /> } /> 
          <Route path='DayDreamSales' element={ <DayDreamSales/> } />

          {/* Maya Nelson TEMPLATES */} {/* PORTFOLIO */}
          <Route path='MayaNelsonHome' element={ <MayaNelsonHome /> } />
          <Route path='MayaNelsonResume' element={ <MayaNelsonResume /> } /> 
          <Route path='MayaNelsonProjects' element={ <MayaNelsonProjects /> } /> 
          <Route path='MayaNelsonContact' element={ <MayaNelsonContact /> } /> 

          {/* Travel Better TEMPLATES */} {/* TRAVEL */}
          <Route path='travelbetterHome' element={ <TravelBetterHome /> } />
          <Route path='travelbetterabout' element={ <TravelBetterAbout/> } />
          <Route path='travelbetterpackage' element={ <TravelBetterPackage /> } />
          <Route path='travelbetterbook' element={ <TravelBetterBook /> } />




        {/* Editing Template */}

        {/* SOAIR AFRICA TEMPLATE */} {/* EDUCATIONAL */}
          <Route path='SoairEditHome' element={ <SoairEditHome/> } />
          <Route path='SoairEditCourse' element={ <SoairEditCourse/> } />
          <Route path='SoairEditEvent' element={ <SoairEditEvent/> } />
          <Route path='SoairEditStudent' element={ <SoairEditStudent/> } />
          <Route path='SoairEditContact' element={ <SoairEditContact/> } />
          <Route path='SoairEditEnrollPage' element={ <SoairEditEnrollPage/> } />

        {/* LAWRENCE TEMPLATE */} {/* RESTAURANT */}
          <Route path='LawrenceEditHome' element={ <LawrenceEditHome /> } />
          <Route path='LawrenceEditReservation' element={ <LawrenceEditReservation /> } />
          <Route path='LawrenceEditAbout' element={ <LawrenceEditAbout /> } />
          <Route path='LawrenceEditContact' element={ <LawrenceEditContact /> } />
          <Route path='LawrenceEditMenu' element={ <LawrenceEditMenu /> } />

        {/* ANN SIMON TEMPLATES */} {/* FASHION */}
        <Route path='DayDreamEditHome' element={ <DayDreamEditHome/> } />
        <Route path='DayDreamEditLookbook' element={ <DayDreamEditLookbook/> } />
        <Route path='DayDreamEditAbout' element={ <DayDreamEditAbout /> } />
        <Route path='DayDreamEditContact' element={ <DayDreamEditContact /> } /> 
        <Route path='DayDreamEditSales' element={ <DayDreamEditSales/> } />

        {/* Maya Nelson TEMPLATES */} {/* PORTFOLIO */}
        <Route path='MayaNelsonEditHome' element={ <MayaNelsonEditHome /> } />
        <Route path='MayaNelsonEditResume' element={ <MayaNelsonEditResume /> } /> 
        <Route path='MayaNelsonEditProjects' element={ <MayaNelsonEditProjects /> } /> 
        <Route path='MayaNelsonEditContact' element={ <MayaNelsonEditContact /> } /> 

        {/* Travel Better TEMPLATES */} {/* TRAVEL */}
        <Route path='travelbettereditHome' element={ <TravelBetterEditHome /> } />
        <Route path='travelbettereditabout' element={ <TravelBetterEditAbout/> } />
        <Route path='travelbettereditpackage' element={ <TravelBetterEditPackage /> } />
        <Route path='travelbettereditbook' element={ <TravelBetterEditBook /> } />
      

         </Routes>
      </Router>
    </>
  )
}

export default App