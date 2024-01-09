import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupForm from '../Pages/SignUpForm'
import LoginForm from '../Pages/LoginForm'
import UserDataForm from '../Pages/UserDataForm'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignupForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/userform" element={<UserDataForm />} />
        </Routes>
    )
}

export default AllRoutes