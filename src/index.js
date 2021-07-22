import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'
import Clock from './Clock'

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello world!</h1>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
)