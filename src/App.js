import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LyricPlayer } from "./components/LyricPlayer/LyricPlayer";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { songs } from "./data/songs";
import { Dashboard } from "./pages/Dashboard";
import { Dictionary } from "./pages/Dictionary";
import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Login } from "./pages/Login";
import { db_create } from "./services/Database";

function App() {
  db_create("songs", songs);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/learn" element={<Learn />}></Route>
            <Route path="/dictionary" element={<Dictionary />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/lyric-player" element={<LyricPlayer />}></Route>
          </Route>
          <Route
            path="/login"
            element={<Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
