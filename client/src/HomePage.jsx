// src/HomePage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div>
            <header className="bg-success text-white text-center py-4">
                <h1>Welcome to Green Minds</h1>
                <p>Your partner in sustainable living and environmental awareness</p>
            </header>

            <section style={{
                background: `url('https://source.unsplash.com/1600x900/?nature,green') no-repeat center center`,
                backgroundSize: 'cover',
                height: '400px',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <h1>Join Us in Making a Difference!</h1>
            </section>

            <div className="container features" style={{ margin: '40px 0' }}>
                <h2 className="text-center">Our Features</h2>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h3>Eco-Friendly Tips</h3>
                        <p>Learn simple yet effective ways to reduce your carbon footprint.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>Community Projects</h3>
                        <p>Join us in various community initiatives focused on sustainability.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>Events & Workshops</h3>
                        <p>Participate in workshops and events that promote environmental awareness.</p>
                    </div>
                </div>
            </div>

            <footer className="text-center" style={{ backgroundColor: '#343a40', color: 'white', padding: '10px 0' }}>
                <p>&copy; 2024 Green Minds. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
