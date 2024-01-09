import React from 'react';

const Preview = ({ userData }) => {
    const { name, age, address, photo } = userData;

    return (
        <div className="preview-container">
            <h2>Preview</h2>
            <div className="preview-content">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Address:</strong> {address}</p>
                {photo && (
                    <div>
                        <strong>Photo:</strong>
                        <img src={URL.createObjectURL(photo)} alt="User" style={{ maxWidth: '200px' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Preview;
