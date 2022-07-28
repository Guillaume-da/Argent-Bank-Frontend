/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {LoginAuthAction} from '../../store/actions/AuthAction'

const Form = (props) => {
	const {user, login} = props
	const[userState, setUserState] = useState({})
      
	return(
        
		<form onSubmit={(event) => {
			event.preventDefault()
			login(userState)
		}}>
			<DivLabel>
				<FormLabel htmlFor="email">Username</FormLabel>
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
				<FormLabel htmlFor="password">Password</FormLabel>
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
const mapStateToProps = (state) => {
	return {
		user: state,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (userState)=> {
			dispatch(LoginAuthAction(userState))
		},
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)