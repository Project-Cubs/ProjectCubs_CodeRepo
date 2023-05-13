import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import ProtectedRoutes from './components/Router/ProtectedRoutes';
import { Dictionary } from './pages/Dictionary/Dictionary';
import { Learn } from './pages/Learn/Learn';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Scoreboard } from './pages/Scoreboard/Scoreboard';
import { LyricPlayer } from './pages/Learn/LyricPlayer/LyricPlayer';

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
