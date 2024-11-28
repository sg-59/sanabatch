import { configureStore } from '@reduxjs/toolkit'
import userslicepageData from './Userslice'


export default configureStore({reducer:{ok:userslicepageData}})