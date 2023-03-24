import "./App.css";
import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Dictionary } from "./pages/Dictionary";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Logout } from "./pages/Logout";
import { db_create } from "./services/Database";
import { songs } from "./services/songs/songs";

function App() {
  // const [isloggedIn, setLoggedIn] = useState(false);

  db_create("songs", songs);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/learn" element={<Learn />}></Route>
            <Route path="/dictionary" element={<Dictionary />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/logout" element={<Logout/>}></Route>

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
