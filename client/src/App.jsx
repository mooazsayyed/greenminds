import { Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './Login'; //Login component

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
