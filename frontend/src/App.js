import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignupUser from './pages/User/SignupUser';


function App() {
  return (
    <div className="App">
  <Router>
  <Routes>


        <Route path='/' element={<SignupUser />}/>

        
   </Routes>
  </Router>
      
   
    </div>
  );
}

export default App;
