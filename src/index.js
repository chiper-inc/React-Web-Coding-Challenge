import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './containers/App'

const renderToDOM = () => {
  if (document.getElementById('root') !== null) {
    ReactDOM.render(<App />, document.getElementById('root'))
  }
}

renderToDOM()
export { renderToDOM }
