/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { LoginAuthAction } from '../../store/actions/AuthAction'

const Form = (props) => {
	const {login} = props
	const[userState, setUserState] = useState({})
	const navigate = useNavigate()
	const [errorHandler, setErrorHandler] = useState({
		hasError: false,
		message: '',
	})
	const[rememberMeState, setRememberMeState] = useState(false)

	return(
		<form onSubmit={(event) => {
			event.preventDefault()
			login(userState, navigate, rememberMeState, setErrorHandler)
		}}>
			<DivLabel>
				<FormLabelLabel htmlFor="email">Username</FormLabelLabel>
				<InputLabel 
					type='email' 
					id='email' 
					name='email' 
					placeholder='Write your email here' 
					onChange={ (event)=> {
						const email = event.target.value
						setUserState({ ...userState, ...{ email }})
					}} 
					required/>
			</DivLabel>
			<DivLabel>
				<FormLabelLabel htmlFor="password">Password</FormLabelLabel>
				<InputLabel 
					type="password" 
					id="password" 
					name='password' 
					placeholder='Write your password here' 
					onChange={ (event)=> {
						const password = event.target.value
						setUserState({ ...userState, ...{ password }})
					}} 
					required/>
			</DivLabel>
			<RememberMe>
				<InputLabel type="checkbox" id="remember-me" />
				<RememberMeLabel htmlFor="remember-me" onClick={() => setRememberMeState(!rememberMeState)}>Remember me</RememberMeLabel>
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
const FormLabelLabel = styled.label`
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

const mapStateToProps = (state) => {
	return {
		auth: state,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (userState, navigate, rememberMeState, setErrorHandler)=> {
			dispatch(LoginAuthAction(userState, navigate, rememberMeState, setErrorHandler))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)