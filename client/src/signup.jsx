// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Signup() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Input validation
//         if (!name || !email || !password) {
//             alert("Please fill in all fields.");
//             return;
//         }

//         setLoading(true);

//         try {
//             const response = await axios.post('http://localhost:3001/api/users/register', { 
//                 name: name.trim(), 
//                 email: email.trim(), 
//                 password: password.trim() 
//             });

//             if (response.status === 201) {
//                 alert("Registration successful!");  // Optionally alert the user
//                 navigate('/login');
//             } else {
//                 console.log('Registration failed:', response.data);
//                 alert('Registration failed: ' + response.data.message);
//             }
//         } catch (err) {
//             if (err.response) {
//                 console.log('Error Response:', err.response.data); // Log response data
//                 alert(err.response.data.message || "An error occurred");
//             } else {
//                 console.log('Error Message:', err.message);
//                 alert(err.message);
//             }
//         } finally {
//             setLoading(false);  // Reset loading state
//         }
//     }

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="name">
//                             <strong>Name</strong>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Name"
//                             autoComplete="off"
//                             name="name"  // Corrected the name attribute here
//                             className="form-control rounded-0"
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
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
//                     <button type="submit" className="btn btn-success w-100 rounded-0" disabled={loading}>
//                         {loading ? "Registering..." : "Register"}
//                     </button>
//                 </form>
//                 <p>Already Have an Account</p>
//                 <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//                     Login
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Signup;


//Shikha's Responsive code

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Input validation
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/api/users/register', { 
                name: name.trim(), 
                email: email.trim(), 
                password: password.trim() 
            });

            if (response.status === 201) {
                alert("Registration successful!");
                navigate('/login');
            } else {
                console.log('Registration failed:', response.data);
                alert('Registration failed: ' + response.data.message);
            }
        } catch (err) {
            if (err.response) {
                console.log('Error Response:', err.response.data);
                alert(err.response.data.message || "An error occurred");
            } else {
                console.log('Error Message:', err.message);
                alert(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-4 rounded col-lg-4 col-md-6 col-sm-8 col-10">
                <h2 className="text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
                <p className="text-center mt-3">Already Have an Account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
