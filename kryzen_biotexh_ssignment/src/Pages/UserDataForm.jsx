import React, { useState } from 'react';
import '../Pages/UserDataForm.css'
import Preview from './Preview';

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



    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, you can send the formData to an API or perform other actions
        console.log(formData);
        setShowPreview(true); // Show preview after form submission
    };

    const togglePreview = () => {
        setShowPreview(!showPreview);
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
                    <button type="submit" onClick={togglePreview}>
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