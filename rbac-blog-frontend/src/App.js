import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <>
      <div className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/signup" style={{ marginLeft: '15px' }}>Signup</Link>
          <Link to="/login" style={{ marginLeft: '15px' }}>Login</Link>
          <Link to="/admin" style={{ marginLeft: '15px' }}>Admin Dashboard</Link>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
