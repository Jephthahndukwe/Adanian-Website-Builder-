import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../Redux/Store.jsx'

import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { AuthProvider } from '../Redux/Context/User.jsx';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
          <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...options}>
            <Routes>
                <Route path='/*' element={ <App /> } />
            </Routes>
            </AlertProvider>
          </Provider>
    </BrowserRouter>
  </AuthProvider>,
)
