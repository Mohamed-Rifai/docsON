import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Landing from './pages/Landing/Landing';
import "react-toastify/dist/ReactToastify.css";
import UserRoutes from './Routes/UserRoutes';
import HospitalRoutes from './Routes/HospitalRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/user/*' element={<UserRoutes/>} />
          <Route path='/hospital/*' element={<HospitalRoutes/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
