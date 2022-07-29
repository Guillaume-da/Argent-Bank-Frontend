import axios from 'axios'
import { AuthActionType } from '../type'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginAuthAction = (userState, navigate, setErrorHandler) => {
	return async (dispatch) => {
		try {
			const response = await axios.post('http://localhost:3001/api/v1/user/login', userState)
			const { data } = response
			dispatch({type: AuthActionType.LOGIN_SUCCESS, payload: data })
			toast.success(data.message)
			navigate('/private/profile')
		} catch (error) {
			if (error.response) {
				const { data } = error.response
				dispatch({
					type: AuthActionType.LOGIN_FAIL,
					payload: error.response.data.message,
				})
				toast.error(data.message, {toastId: 'loginFailed'}, {autoClose: 1500, hideProgressBar: true})
			}
			setErrorHandler({ hasError: true, message: error.response.data.message })
		}
	}
}
const LogoutAuthAction = () => {
	return async (dispatch) => {
		dispatch({type: AuthActionType.USER_LOGOUT, payload: {} })
		toast.success('You are now disconnected')
	}
}

export { LoginAuthAction, LogoutAuthAction, AuthActionType}