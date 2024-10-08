// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// axios.defaults.withCredentials = true;  // Ensure it is set globally

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     // Async function to handle login
//     const handleLogin = async (email, password) => {
//         try {
//             const response = await axios.post('http://localhost:3001/api/users/login', {
//                 email,
//                 password,
//             }, { withCredentials: true }); // Include credentials for cookies

//             console.log("Login response:", response.data); // Log the response

//             if (response.data.Status === "Success") {
//                 if (response.data.role === "admin") {
//                     navigate('/dashboard'); // Redirect to admin dashboard
//                 } else {
//                     navigate('/'); // Redirect to home
//                 }
//             } else {
//                 alert("Login failed. Please check your credentials and try again.");
//             }
//         } catch (error) {
//             console.error("Login error:", error.response.data); // Log error response
//             alert("Login failed. Please check your credentials and try again.");
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (email === "" || password === "") {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // Call the handleLogin function
//         handleLogin(email, password);
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="email">
//                             <strong>Email</strong>
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter Email"
//                             autoComplete="off"
//                             name="email"
//                             className="form-control rounded-0"
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password">
//                             <strong>Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             name="password"
//                             className="form-control rounded-0"
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100 rounded-0">
//                         Login
//                     </button>
//                 </form>
//                 <p>Already Have an Account?</p>
//                 <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//                     Sign Up
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Login;



// Shikha's responsive code

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;  // Ensure it is set globally

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3001/api/users/login', {
                email,
                password,
            }, { withCredentials: true });

            console.log("Login response:", response.data);

            if (response.data.Status === "Success") {
                if (response.data.role === "admin") {
                    navigate('/dashboard');
                } else {
                    navigate('/');
                }
            } else {
                alert("Login failed. Please check your credentials and try again.");
            }
        } catch (error) {
            console.error("Login error:", error.response.data);
            alert("Login failed. Please check your credentials and try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        handleLogin(email, password);
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-4 rounded col-lg-4 col-md-6 col-sm-8 col-10">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0 mb-3">
                        Login
                    </button>
                </form>
                <p className="text-center">Don't Have an Account?</p>
                <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;
