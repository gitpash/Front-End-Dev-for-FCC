import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import styles from './index.css'

const title = 'Minimal-Techno-Setup React__Webpack__Babel'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()
