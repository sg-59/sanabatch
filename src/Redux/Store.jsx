import userslicepageData from './Userslice'
import {configureStore} from "@reduxjs/toolkit"

export default configureStore({reducer:{ok:userslicepageData}})