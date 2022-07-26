/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { LoginAuthAction } from '../../store/actions/AuthAction'
import PropTypes from 'prop-types'

/**
 * Allows to make user authentification
 *
 * @param {object} props - contains login function
 *
 * @return login form
 * 
 * @version 1.0
 * 
 */
const LoginForm = (props) => {
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
                    
			<ButtonLabel type='submit'>Sign In</ButtonLabel>
		</form>
	)
}

LoginForm.propTypes = {
	login: PropTypes.func.isRequired,
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

/**
 * Allows to pass login function to props
 *
 * @param {function} dispatch 
 *
 * @return login function
 * 
 * @version 1.0
 * 
 */
const mapDispatchToProps = (dispatch) => {
	return {

		/**
		 * Allows to dispatch LoginAuthAction action
		 *
		 * @param {object} userState - contains mail and password
		 * @param {object} navigate - allows to use useNavigate()
		 * @param {boolean} rememberMeState - allows to know if remember me option was checked
		 * @param {function} setErrorHandler - allows to set error message
		 * 
		 * @version 1.0
		 * 
		 */
		login: (userState, navigate, rememberMeState, setErrorHandler)=> {
			dispatch(LoginAuthAction(userState, navigate, rememberMeState, setErrorHandler))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)