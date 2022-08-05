import axios from 'axios'
import { AuthActionType } from '../type'
import { AuthWithRememberActionType } from '../type'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


/**
 * Allows to login to the API and dispatch datas received to the store
 *
 * @param {object} userState - datas coming from loging form (mail and password)
 * @param {function} navigate = useNavigate()
 * @param {boolean} rememberMeState - allows to know if remember me option was clicked in form
 * @param {function} setErrorHandler - allows to set errorHandler which is used by useState() in loging form
 *
 * @version 1.0
 * 
 */
const LoginAuthAction = (userState, navigate, rememberMeState, setErrorHandler) => {
	return async (dispatch) => {
		try {
			const response = await axios.post('http://localhost:3001/api/v1/user/login', userState)
			const { data } = response
			if(rememberMeState === false) {
				dispatch({type: AuthActionType.LOGIN_SUCCESS, payload: data })
			} else {
				dispatch({type: AuthWithRememberActionType.LOGINWITHREMEMBER_SUCCESS, payload: data })
			}
			toast.success(data.message)
			navigate('/profile')
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