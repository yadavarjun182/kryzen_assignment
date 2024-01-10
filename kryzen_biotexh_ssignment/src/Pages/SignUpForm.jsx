import React, { useState } from 'react';
import './SignUpForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import '../Pages/SignUp.css'; // Impo?rt your CSS file for styling

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const navigate= useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    // Handle form submission here, for example, send data to an API or perform other actions
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:2387/user/register', formData);
            console.log(response.data); // handle success message
            navigate('/login');
        } catch (error) {
            console.error(error.response.data.err); // handle error
        }
    };


    return (
        <div className="container">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
