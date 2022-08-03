import React from 'react'
import {useSelector} from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'


/**
 * Allows to protect the profile route. Profile content is located inside Outlet component
 *
 * @return Outlet component
 * 
 * @version 1.0
 * 
 */
const Private = () => {
	const isLoggedIn = (useSelector(state => state.connection.isLoggedIn) ? useSelector(state => state.connection.isLoggedIn) : useSelector(state => state.persistedConnection.isLoggedIn))

	return (
		isLoggedIn ? <Outlet></Outlet> : <Navigate to='/login' />
	)
}

export default Private