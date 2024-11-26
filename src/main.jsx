import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Storepage from './Redux/Store.jsx'
import {Provider} from 'react-redux'


createRoot(document.getElementById('root')).render(
<Provider store={Storepage}>
    <App/>
    </Provider>


)
