import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { getUserName} from '../../features/userName/userNameSlice'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import 'react-toastify/dist/ReactToastify.css'

import { login, reset } from '../../features/auth/authSlice'
import styled from 'styled-components'

const Form = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
    
	const { email, password } = formData
    
	const navigate = useNavigate()
	const dispatch = useDispatch()
    
	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	)
  
	useEffect(() => {
		if (isError) {
			toast.error(message)
		}
		if (isSuccess || user) {
			toast.success('You are now connected', {toastId: 'loginSuccess'}, {autoClose: 1500, hideProgressBar: true})
			
			navigate('/profile')
		}
		dispatch(reset())
	}, [user, isError, isSuccess, message, navigate, dispatch])
    
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
    
	const onSubmit = (e) => {
		e.preventDefault()
    
		const userData = {
			email,
			password,
		}
    
		dispatch(login(userData))
	}
	// const notify = () => toast()
      
	if (isLoading) {
		return <Loader />
	}
      
	return(
        
		<form onSubmit={onSubmit}>
			<DivLabel>
				<FormLabel htmlFor="email">Username</FormLabel>
				<InputLabel type='email' id='email' name='email' value={email} onChange={onChange} required/>
			</DivLabel>
			<DivLabel>
				<FormLabel htmlFor="password">Password</FormLabel>
				<InputLabel type="password" id="password" name='password' value={password} onChange={onChange} required/>
			</DivLabel>
			<RememberMe>
				<InputLabel type="checkbox" id="remember-me" />
				<RememberMeLabel htmlFor="remember-me">Remember me</RememberMeLabel>
			</RememberMe>
                    
			<ButtonLabel type='submit' /* onClick={notify} */>Sign In</ButtonLabel>
			
		</form>
	)
}

const DivLabel = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
`
const FormLabel = styled.label`
    font-weight: bold;
`
const RememberMe = styled.div`
    display: flex;
`
const RememberMeLabel = styled.label`
    margin-left: 0.25rem;
`
const ButtonLabel = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    text-decoration: underline;
`
const InputLabel = styled.input`
    padding: 5px;
    font-size: 1.2rem;
`

export default Form