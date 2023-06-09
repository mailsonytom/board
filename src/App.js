import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Container/Login/Login"
import Dashboard from "./Container/Dashboard/Dashboard"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* Routes to login page and dashboard  */}
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
