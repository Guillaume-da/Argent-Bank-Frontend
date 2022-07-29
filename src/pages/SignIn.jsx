import { React } from 'react'
import styled from 'styled-components'
import {UserCircle} from '@styled-icons/fa-solid'
import Form from '../components/Form'

const SignIn = () => {
	return (
		<MainLabel>
			<SectionLabel>
				<Icon />
				<h1>Sign In</h1>
				<Form />
			</SectionLabel>
		</MainLabel>
	)
}

const MainLabel = styled.main`
    flex: 1;
    background-color: #12002b;
`
const SectionLabel = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
`
const Icon = styled(UserCircle)`
  color: black;
  width: 16px;
`

export default SignIn