import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './Redux/Store.jsx';


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
  <App/>
  </PersistGate>
    </Provider>

)
