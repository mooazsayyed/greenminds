import { Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './Login'; //Login component
import Dashboard from './Dashboard'; //Dashboard component
import HomePage from './HomePage';
function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
