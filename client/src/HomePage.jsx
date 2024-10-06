// src/App.js
import React from 'react';
import './App.css'; // Make sure to create this file for your styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
    return (
        <div>
            <header className="main-header">
                <div className="logo">
                    <h1 className="fade-in">
                        <img src="https://assets.classy.org/2882019/b72e8e6c-b1b1-11ec-be22-0a6c9593c59f.png" alt="Logo" />
                    </h1>
                </div>
               
                <nav className="navbar"> {/* Navigation container */}
                <ul>
                    <li>
                        <Link to="/maindashboard" className="nav-button">Impact</Link> {/* Button for Impact */}
                    </li>
                    <li>
                        <Link to="/tree-input" className="nav-button">Trees Data</Link> {/* Button for Trees Data */}
                    </li>
                    <li>
                        <Link to="/deforestation-input" className="nav-button">Deforestation Submit</Link> {/* Button for Deforestation Data */}
                    </li>
                    <li>
                        <Link to="/deforestation-map" className="nav-button">Deforestation Map</Link> {/* Button for Deforestation */}
                    </li>
                    <li>
                    <Link to="/login" className="nav-button">Login</Link> {/* Button for Deforestation Data */}
                    </li>
                    <li>
                    <Link to="/signup" className="nav-button">Signup</Link> {/* Button for Deforestation Data */}
                    </li>

                </ul>
            </nav>

            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content slide-in">
                    <h2 className="text-fade">Let's Get Planting</h2>
                    <p>
                        Break the cycle of hunger, poverty, and environmental destruction. With your help, Trees for the Future (TREES) restores landscapes in developing communities.
                    </p>
                    <center>
                      <a href="#" class = 'donate-btn' > Give Today</a> 
                    </center>
                </div>
                <div className="hero-image bounce-in">
                    <img src="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/03/Untitled-1024-%C3%97-768px-2.jpg" alt="HHomePagey woman planting trees" />
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <div className="container">
                    <h2>About Us</h2>
                    <p>
                        Trees for the Future is committed to ending hunger, poverty, and environmental degradation. We train farmers in sustainable practices, restore degraded lands, and plant trees to ensure a better future for generations to come.
                    </p>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="mission" id="mission">
                <div className="container">
                    <h2 className="missiontxt">Our Mission</h2>
                    <div className="mission-grid">
                        <div className="mission-item">
                            <h3>Plant Trees</h3>
                            <p>We plant trees in communities that are most affected by deforestation, helping them restore their environment.</p>
                        </div>
                        <div className="mission-item">
                            <h3>End Hunger</h3>
                            <p>By providing farmers with the tools and knowledge, we help create sustainable food sources for communities.</p>
                        </div>
                        <div className="mission-item">
                            <h3>Fight Poverty</h3>
                            <p>Our program improves farmers' livelihoods, enabling them to earn a steady income and break free from poverty.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects" id="projects">
                <div className="container">
                    <h2>Our Projects</h2>
                    <div className="project-grid">
                        <div className="project-item">
                            <img src="https://res.cloudinary.com/drt2tlz1j/images/c_scale,w_448,h_220,dpr_2/f_auto,q_auto/v1675888910/fn1/global-government-tree-planting/global-government-tree-planting.jpg?_i=AA" alt="Project 1" />
                            <h3>Reforestation in Africa</h3>
                            <p>Our ongoing projects in Africa have successfully restored thousands of hectares of degraded land.</p>
                        </div>
                        <div className="project-item">
                            <img src="https://static.wixstatic.com/media/28fcc4_5fdc7dfe7bdb495495da4b1e076ad3ec~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/28fcc4_5fdc7dfe7bdb495495da4b1e076ad3ec~mv2.png" alt="Project 2" />
                            <h3>Agroforestry in Asia</h3>
                            <p>We work with farmers in Asia to implement agroforestry practices, ensuring sustainable food and income sources.</p>
                        </div>
                        <div className="project-item">
                            <img src="https://ecocart.io/wp-content/uploads/2021/06/Blog-Carbon-Offsets.png" alt="Project 3" />
                            <h3>Carbon Offset Projects</h3>
                            <p>By planting trees, we help offset carbon emissions and combat climate change on a global scale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Section */}
            <section className="donate" id="donate">
                <div className="container">
                    <h2>Support Our Cause</h2>
                    <p>Your donation can make a real difference. Help us continue our mission to plant trees, end hunger, and fight poverty.</p>
                    <a href="#" className="donate-btn">Donate Now</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                {/* Newsletter Subscription Section */}
                <div className="newsletter">
    <div className="newsletter-content">
        <div className="newsletter-text">
            <h2>Add Impact to Your Inbox</h2>
            <p>All fields required</p>
            <form className="newsletter-form" >
                <input type="text" placeholder="First Name" required aria-label="First Name" />
                <input type="text" placeholder="Last Name" required aria-label="Last Name" />
                <input type="email" placeholder="Email Address" required aria-label="Email Address" />
                <button type="submit">SUBMIT</button>
            </form>
            <p>Get our emails to stay in the know on what's happening in the field and ways you can get involved.</p>
        </div>
    </div>
</div>

                {/* Footer Links Section */}
                <div className="footer-links">
                    <a href="#">CONTACT US</a>
                    <a href="#">INSIDE TREES</a>
                    <a href="#">THE BOARD</a>
                    <a href="#">GET INVOLVED</a>
                    <a href="#">BLOG</a>
                    <a href="#">FINANCIALS</a>
                    <a href="#">CAREERS</a>
                    <a href="#">WHISTLEBLOWER HOTLINE</a>
                </div>

                {/* Footer Logos Section */}
                <div className="footer-logos">
                    <img src="c:\Users\hp\OneDrive\Pictures\Flagship.png" alt="World Restoration Flagship Logo" />
                    <img src="f:\Your paragraph text.png" alt="Trees for the Future Logo" />
                </div>

                {/* Social Media Icons Section */}
                <div className="social-media">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>

                {/* Cookie Policy Section */}
                <div className="cookie-policy">
                    <p>
                        We use cookies on our website to personalize your experience and improve our efforts. By continuing, you agree to the terms of our <a href="#">privacy policy</a>.
                    </p>
                    <button className="agree-btn">I AGREE</button>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;