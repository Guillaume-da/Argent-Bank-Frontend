import axios from 'axios'
import { AuthWithRememberActionType } from '../type'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginAuthWithRememberAction = (userState, navigate, rememberMeState, setErrorHandler) => {
	console.log('action',rememberMeState)
	return async (dispatch) => {
		try {
			const response = await axios.post('http://localhost:3001/api/v1/user/login', userState)
			const { data } = response
			console.log('action', rememberMeState)
			
			dispatch({type: AuthWithRememberActionType.LOGINWITHREMEMBER_SUCCESS, payload: data })
			
			toast.success(data.message)
			navigate('/private/profile')
		} catch (error) {
			if (error.response) {
				console.log(error.response)
			}
			setErrorHandler({ hasError: true, message: error.response.data.message })
		}
	}
}

const LogoutAuthAction = () => {
	return async (dispatch) => {
		dispatch({type: AuthWithRememberActionType.USER_LOGOUT, payload: {} })
		toast.success('You are now disconnected')
	}
}

export { LoginAuthWithRememberAction, LogoutAuthAction, AuthWithRememberActionType}