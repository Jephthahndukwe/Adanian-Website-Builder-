import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import configStore from '../Redux/Store.jsx'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const store = configStore()
const persistor = persistStore(store)


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <React.StrictMode>
                <Routes>
                    <Route path='/*' element={ <App /> } />
                </Routes>
            </React.StrictMode>
            </PersistGate>
          </Provider>
    </BrowserRouter>,
)
