import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
            setUserData(response.data.results[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="user-profile">
            {userData && (
                <div className="details-container">
                    <div className="image-section">
                        <img src={userData.picture.large} alt="User" className="user-image" />
                    </div>
                    <div className="info-section">
                    <p className="detail">Name: {userData.name.first} {userData.name.last}</p>
                    <p className="detail">Gender: {userData.gender}</p>
                    <p className="detail">Phone Number: {userData.phone}</p>
                </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
