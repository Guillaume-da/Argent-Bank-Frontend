import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {UserCircle} from '@styled-icons/fa-solid'
import {SignOut} from '@styled-icons/octicons/SignOut'
import {LogoutAuthAction} from '../../store/actions/AuthAction'


const Header = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(state => state.currentUser.isLoggedIn)

	return (
    
		<header>
			<NavLabel>
				<Link to="/">
					<ImgLabel
						src={logo}
						alt="Argent Bank Logo"
					/>
				</Link>
				<Title>Argent Bank</Title>
				{isLoggedIn ? (
					<DivLabel>
						<SpanLabel><UserIcon /> Steve Rogers</SpanLabel>
						<LogoutSpanLabel onClick={() => dispatch(LogoutAuthAction(dispatch))} >
							<SignOutIcon />
							Sign Out
						</LogoutSpanLabel>
					</DivLabel>
				) : (
					<div>
						<LinkLabel to="/login">
							<UserIcon />
							Sign In
						</LinkLabel>
					</div>
				)}
			</NavLabel>
		</header>
	)
}

const LinkLabel = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
  column-gap: 5px;
`
const NavLabel = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`
const ImgLabel = styled.img`
  max-width: 100%;
  width: 200px;
`
const UserIcon = styled(UserCircle)`
  color: black;
  width: 16px;
`
const SignOutIcon = styled(SignOut)`
  color: black;
  width: 16px;
`
const Title = styled.h1`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`
const DivLabel = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`
const SpanLabel = styled.span`
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  column-gap: 5px;
`
const LogoutSpanLabel = styled.span`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
`

export default Header