import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from "./pages/Home";
import Learn from './pages/Learn';
import Login from './pages/Login';
import Register from './pages/Register';
import { Scoreboard } from './pages/Scoreboard';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/learn' element={<Learn />} ></Route>
            {/* <Route path='/bookmar' element={< />} ></Route> */}
            <Route path='/scoreboard' element={<Scoreboard />} ></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
