import {configureStore} from "@reduxjs/toolkit"
import userslicepage from './Userslice'

export default configureStore({
    reducer:{
        hello:userslicepage
    }
})