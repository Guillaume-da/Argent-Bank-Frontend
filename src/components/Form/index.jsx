import { React} from 'react'
import styled from 'styled-components'

const Form = () => {
      
	return(
        
		<form>
			<DivLabel>
				<FormLabel htmlFor="email">Username</FormLabel>
				<InputLabel type='email' id='email' name='email' value=''  required/>
			</DivLabel>
			<DivLabel>
				<FormLabel htmlFor="password">Password</FormLabel>
				<InputLabel type="password" id="password" name='password' value='' required/>
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