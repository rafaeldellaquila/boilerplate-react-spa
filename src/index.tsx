import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './stores/store'
import Main from './layouts/Main'
import 'src/styles/index.css'

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);