import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Route } from 'react-router-dom'
import store from './services/store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Route>
                <App />
            </Route>
        </Provider>
    </React.StrictMode>
)
