import Login from "./components/login/login";
import DashboardLayout from "./layout/layout";
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardLayout />} />
        </Routes>
    
    </>
  );
}

export default App;
