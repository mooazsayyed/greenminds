// src/components/MainDashboard.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './MainDashboard.css'; // Optional: for custom styles

const MainDashboard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/maindashboard');
                const result = await response.json();
                setData(result); // Assuming your backend returns JSON data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    // Example data for the chart
    const chartData = {
        labels: ['Trees Planted', 'Locations', 'Users'], // Example labels
        datasets: [
            {
                label: 'Tree Preservation Data',
                data: [data.treesCount, data.locationsCount, data.usersCount], // Example values
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to Green!</h1>
            <div className="chart-section">
                <h2>Overview</h2>
                <Bar data={chartData} options={{ responsive: true }} />
            </div>
            <div className="info-cards">
                <div className="card">
                    <h3>Total Trees Planted</h3>
                    <p>{data.treesCount}</p>
                </div>
                <div className="card">
                    <h3>Total Locations</h3>
                    <p>{data.locationsCount}</p>
                </div>
                <div className="card">
                    <h3>Total Users</h3>
                    <p>{data.usersCount}</p>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
