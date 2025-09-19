import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Utils/Store.js'
import './Utils/UserSlice.js'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>

            <App />

        </Provider>
    </BrowserRouter>
)
