import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import React from "react";

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)
const navigate = useNavigate()

const login = () => {
  setIsLoggedIn(true)
}

const logout = () => {
  setIsLoggedIn(false)
}

useEffect(() => {
  if (isLoggedIn)
{
  navigate('/')
} else {
  navigate('/login')
}
}, [isLoggedIn])

  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
