// import {configureStore} from '@reduxjs/toolkit'
// import userSlicepage from './UserSlice'
 
// export default configureStore({reducer:{userInfo:userSlicepakumari@gmail.com

import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import userslicePage from './UserSlice'

const persistConfig = {
  key: 'Melvinmern',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig,userslicePage)

export const store = configureStore({
  reducer:{
   userInfo:persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

