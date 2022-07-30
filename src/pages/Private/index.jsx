import React from 'react'
import {useSelector} from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

const Private = () => {
	const isLoggedIn = (useSelector(state => state.withoutRememberMe.isLoggedIn) ? useSelector(state => state.withoutRememberMe.isLoggedIn) : useSelector(state => state.withRememberMe.isLoggedIn))

	if(!isLoggedIn) {
		return <Navigate to='/login' />
	}

	return (
		<Outlet></Outlet>
	)
}

export default Private