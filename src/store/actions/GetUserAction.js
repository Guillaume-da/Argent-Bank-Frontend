/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import axios from 'axios'
import { GetUserType } from '../type'
import 'react-toastify/dist/ReactToastify.css'

const GetUserAction = (token) => {
	return async (dispatch) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
		const data = {}
		try {
			const response = await axios.post('http://localhost:3001/api/v1/user/profile', data, config)
			const datas  = response.data
			dispatch({type: GetUserType.GETUSER_SUCCESS, payload: datas })
			
		} catch (error) {
			if (error.response) {
				const { datas } = error.response
				dispatch({
					type: GetUserType.GETUSER_FAIL,
					payload: datas.data.message,
				})
			}
		}
	}
}

export default GetUserAction