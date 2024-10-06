import React, { useState } from 'react';
import axios from 'axios';

const TreeInputForm = () => {
    // State for planting trees
    const [count, setCount] = useState('');
    const [location, setLocation] = useState('');
    const [datePlanted, setDatePlanted] = useState('');
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePhotoChange = (event) => {
        setPhotos(event.target.files); // Handle multiple file uploads
    };

    const handleTreeSubmit = async (event) => {
        event.preventDefault();

        // Prepare form data
        const formData = new FormData();
        formData.append('count', count);
        formData.append('location', location);
        formData.append('datePlanted', datePlanted);
        Array.from(photos).forEach((file) => {
            formData.append('photos', file);
        });

        // Reset state for loading and error/success messages
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        // Check for network connectivity
        if (!navigator.onLine) {
            setLoading(false);
            setErrorMessage('No internet connection. Please check your network and try again.');
            return;
        }

        try {
            // Make the POST request with formData
            const response = await axios.post('http://localhost:3001/api/trees', formData);

            console.log('Tree added:', response.data);
            setSuccessMessage('Tree added successfully!');

            // Reset form fields after successful submission
            setCount('');
            setLocation('');
            setDatePlanted('');
            setPhotos([]);
        } catch (error) {
            console.error('Error adding tree:', error);
            setErrorMessage('Error adding tree: ' + (error.response ? error.response.data.message : error.message));
        } finally {
            setLoading(false); // End the loading state
        }
    };

    // Inline CSS Styles with animations
    const styles = {
        formContainer: {
            maxWidth: '500px',
            margin: '40px auto',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 0.5s ease',
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            transition: 'border-color 0.3s ease',
        },
        inputFocus: {
            borderColor: '#28a745',
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#34c759',
            color: '#ffffff',
            fontSize: '18px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '10px',
        },
        buttonLoading: {
            backgroundColor: '#28a745',
        },
        successMessage: {
            color: 'green',
            fontWeight: 'bold',
            animation: 'fadeIn 1s ease-in-out',
        },
        errorMessage: {
            color: 'red',
            fontWeight: 'bold',
            animation: 'shake 0.3s ease',
        },
        fadeIn: {
            '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
            },
        },
        shake: {
            '@keyframes shake': {
                '0%, 100%': { transform: 'translateX(0)' },
                '25%': { transform: 'translateX(-5px)' },
                '75%': { transform: 'translateX(5px)' },
            },
        },
    };

    return (
        <div style={styles.formContainer}>
            <h1>Add Trees Planted</h1>
            <form onSubmit={handleTreeSubmit}>
                <input
                    type="number"
                    placeholder="Number of Trees"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="date"
                    value={datePlanted}
                    onChange={(e) => setDatePlanted(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={styles.input}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={loading ? { ...styles.button, ...styles.buttonLoading } : styles.button}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
            {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        </div>
    );
};

export default TreeInputForm;