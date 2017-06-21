import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import styles from './index.css'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()
