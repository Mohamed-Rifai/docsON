import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import DocterListPage from './pages/User/DocterListPage';
import DocterProfilePage from './pages/User/DocterProfilePage';
import HospitalViewPage from './pages/User/HospitalViewPage';
// import LoginUser from './pages/User/LoginUser';
// import SignupUser from './pages/User/SignupUser';


function App() {
  return (
    <div className="App">
  <Router>
  <Routes>


        {/* <Route path='/signup' element={<SignupUser />}/>
          <Route path='/login' element={<LoginUser />} /> */}
          <Route path='/' element={<Landing />} />
          <Route path='/hospitalview/:id' element={<HospitalViewPage/>} />
          <Route path='/docterslist' element={<DocterListPage/>} />
          <Route path='/docterview' element={<DocterProfilePage/>} />
           
        
   </Routes>
  </Router>
      
   
    </div>
  );
}

export default App;
