import React, { useState } from 'react';
import '../Pages/UserDataForm.css'
import Preview from './Preview';
import axios from 'axios';



const UserDataForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        photo: null,
    });

    const [showPreview, setShowPreview] = useState(false);

    // ... (existing functions)





    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            photo: file,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2387/data/userform', formData);
            console.log(response.data); // handle success message
            setShowPreview(true); // Show preview after form submission
        } catch (error) {
            console.error(error.response.data.err); // handle error
        }
    };



    return (

        <div className="container">
            <div>
                <h1>User Data Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Photo:</label>
                        <input
                            type="file"
                            id="photo"
                            name="photo"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            required
                        />
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <div>
                {showPreview && <Preview userData={formData} />} {/* Show preview if showPreview is true */}

            </div>


        </div>

    )
}

export default UserDataForm