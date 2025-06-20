import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {

    return (
        <div>
            {localStorage.getItem("data") ? <Outlet /> : <Navigate to="/login" />}
        </div>
    )
}

export default PrivateRoute