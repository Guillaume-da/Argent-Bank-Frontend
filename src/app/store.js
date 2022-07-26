import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userNameReducer from '../features/userName/userNameSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		userName: userNameReducer,
	},
})