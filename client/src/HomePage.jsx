// // src/HomePage.js
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const HomePage = () => {
//     return (
//         <div>
//             <header className="bg-success text-white text-center py-4">
//                 <h1>Welcome to Green Minds</h1>
//                 <p>Your partner in sustainable living and environmental awareness</p>
//             </header>

//             <section style={{
//                 background: `url('https://source.unsplash.com/1600x900/?nature,green') no-repeat center center`,
//                 backgroundSize: 'cover',
//                 height: '400px',
//                 color: 'white',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 textAlign: 'center'
//             }}>
//                 <h1>Join Us in Making a Difference!</h1>
//             </section>

//             <div className="container features" style={{ margin: '40px 0' }}>
//                 <h2 className="text-center">Our Features</h2>
//                 <div className="row">
//                     <div className="col-md-4 text-center">
//                         <h3>Eco-Friendly Tips</h3>
//                         <p>Learn simple yet effective ways to reduce your carbon footprint.</p>
//                     </div>
//                     <div className="col-md-4 text-center">
//                         <h3>Community Projects</h3>
//                         <p>Join us in various community initiatives focused on sustainability.</p>
//                     </div>
//                     <div className="col-md-4 text-center">
//                         <h3>Events & Workshops</h3>
//                         <p>Participate in workshops and events that promote environmental awareness.</p>
//                     </div>
//                 </div>
//             </div>

//             <footer className="text-center" style={{ backgroundColor: '#343a40', color: 'white', padding: '10px 0' }}>
//                 <p>&copy; 2024 Green Minds. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// }

// export default HomePage;


//Shikha's Responsive code

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-success text-white text-center py-4">
                <h1>Welcome to Green Minds</h1>
                <p>Your partner in sustainable living and environmental awareness</p>
            </header>

            {/* Hero Section */}
            <section
                style={{
                    background: `url('https://source.unsplash.com/1600x900/?nature,green') no-repeat center center`,
                    backgroundSize: 'cover',
                    height: '400px',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <h1 className="display-4">Join Us in Making a Difference!</h1>
            </section>

            {/* Features Section */}
            <div className="container features my-5">
                <h2 className="text-center mb-4">Our Features</h2>
                <div className="row text-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h3>Eco-Friendly Tips</h3>
                        <p>Learn simple yet effective ways to reduce your carbon footprint.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h3>Community Projects</h3>
                        <p>Join us in various community initiatives focused on sustainability.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h3>Events & Workshops</h3>
                        <p>Participate in workshops and events that promote environmental awareness.</p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="text-center" style={{ backgroundColor: '#343a40', color: 'white', padding: '10px 0' }}>
                <p>&copy; 2024 Green Minds. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
