import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './dm.css';

const DeforestationInput = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');
    const [percentageImpacted, setPercentageImpacted] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const deforestationData = {
            city,
            location,
            percentageImpacted: Number(percentageImpacted), // Ensure this is a number
        };

        try {
            const response = await fetch('http://localhost:3001/api/deforestations/deforest-input', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(deforestationData),
            });

            if (!response.ok) {
                throw new Error('Failed to create deforestation record');
            }

            const result = await response.json();
            console.log('Deforestation record created:', result);
            // Optionally clear the form or handle success
            setCity('');
            setLocation('');
            setPercentageImpacted('');

            // Redirect to the deforestation map page
            navigate('/deforestation-map'); // Use navigate for redirection
        } catch (error) {
            console.error('Error creating deforestation record:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>City:</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
            <div>
                <label>Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div>
                <label>Percentage Impacted:</label>
                <input
                    type="number"
                    value={percentageImpacted}
                    onChange={(e) => setPercentageImpacted(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default DeforestationInput;
