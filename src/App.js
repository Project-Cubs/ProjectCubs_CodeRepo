import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import { Dictionary } from './pages/Dictionary';
import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Scoreboard } from './pages/Scoreboard';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { LyricPlayer } from './components/LyricPlayer/LyricPlayer';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)


function App() {

  return (
    <div className="App">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/learn' element={<Learn />} ></Route>
            <Route path='/dictionary' element={<Dictionary />} ></Route>
            <Route path='/scoreboard' element={<Scoreboard />} ></Route>
            <Route path="/lyric-player" element={<LyricPlayer />}></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
