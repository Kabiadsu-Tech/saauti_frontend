import { configureStore } from '@reduxjs/toolkit'
import loggedInReducer from './features/auth'
export const store = configureStore({
  reducer: {
    login:loggedInReducer
  },
})