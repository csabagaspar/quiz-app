import React from 'react'
import ReactDOM from 'react-dom'
import {store} from './app/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div>
      <header>
	      Quiz Application
      </header>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
