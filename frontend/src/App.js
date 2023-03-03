import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import HospitalHome from './pages/Hospital/HospitalHome';
import RegisterHospital from './pages/Hospital/RegisterHospital';
import Landing from './pages/Landing/Landing';
import DocterListPage from './pages/User/DocterListPage';
import DocterProfilePage from './pages/User/DocterProfilePage';
import HospitalViewPage from './pages/User/HospitalViewPage';
import LoginUser from './pages/User/LoginUser';   
import SignupUser from './pages/User/SignupUser';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
      <ToastContainer/>
        
          <Routes>
            <Route path="/signup" element={<SignupUser />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/" element={<Landing />} />
            <Route path="/hospitalview/:id" element={<HospitalViewPage />} />
            <Route path="/docterslist" element={<DocterListPage />} />
            <Route path="/docterview" element={<DocterProfilePage />} />
            <Route path="/hospital-home" element={<HospitalHome />} />
            <Route
              path="/hospital-registration"
              element={<RegisterHospital />}
            />
          </Routes>
      </Router>
       
    </div>
  );
}

export default App;
