import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Dashboard() {
    const [suc, setSuc] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
            .then(res => {
                console.log("dashboard: " + res.data);
                // Check if the response contains the welcome message
                if (res.data === "Welcome to the dashboard!") {
                    setSuc("Success!"); // Set success state
                } else {
                    navigate('/'); // Redirect to homepage if not authenticated
                }
            })
            .catch(err => {
                console.log(err);
                navigate('/'); // Redirect on error
            });
    }, [navigate]); // Add navigate as a dependency to useEffect

    return (
        <div>
            <h2>Dashboard</h2>
            {suc && <p>{suc}</p>} {/* Only display success message if it's set */}
        </div>
    );
}

export default Dashboard;
