import React from 'react'

import {Outlet/* ,  Navigate */} from 'react-router-dom'

const Private = () => {

	// if(!isConnected) {
	// 	return <Navigate to='/login' />
	// }

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default Private