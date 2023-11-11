import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Favicon from "react-favicon"

//Importing react-router-dom
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Favicon url="../public/assets/favicon.ico" />
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </>
)
