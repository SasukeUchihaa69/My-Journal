import './App.css';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage';
import MyAppBar from './Components/MyAppBar';


function App() {
  return (
    <Router>
    <div>
      <MyAppBar/>
      <Routes>
  <Route path="/home" element={<HomePage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/" element={<LoginPage />} />
</Routes>
    </div>
  </Router>
  );
}

export default App;
