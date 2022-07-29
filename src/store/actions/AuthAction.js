import axios from 'axios'
import AuthActionType from '../type'

const LoginAuthAction = (userState, navigate, setErrorHandler) => {
	return async (dispatch) => {
		try {
			const response = await axios.post('http://localhost:3001/api/v1/user/login', userState)
			const { data } = response
			dispatch({type: AuthActionType.LOGIN_SUCCESS, payload: data })
			navigate('/private/profile')
		} catch (error) {
			if (error.response) {
				dispatch({
					type: AuthActionType.LOGIN_FAIL,
					payload: error.response.data.message,
				})
			}
			setErrorHandler({ hasError: true, message: error.response.data.message })
		}
	}
}
const LogoutAuthAction = () => {
	return async (dispatch) => {
		dispatch({type: AuthActionType.USER_LOGOUT, payload: {} })
	}
}


export { LoginAuthAction, LogoutAuthAction, AuthActionType}