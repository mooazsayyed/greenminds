import { Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './Login'; //Login component
import Dashboard from './Dashboard'; //Dashboard component
import HomePage from './HomePage';
import TreeInputForm from './TreeInputForm'; // Adjust the path if necessary
import MainDashboard from './MainDashboard';
import DeforestationInput from './DeforestationInput';
import DeforestationMap from './DeforestationMap';
function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/tree-input" element={<TreeInputForm />} /> 
      <Route path="/maindashboard" element={<MainDashboard />} />
      <Route path="/deforestation-input" element={<DeforestationInput />} />
      <Route path="/deforestation-map" element={<DeforestationMap />} />
    </Routes>
  );
}

export default App;
