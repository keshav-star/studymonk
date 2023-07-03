import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signin } from "./components/Signin/signin";
import Welcome from "./Welcome";
import { SignUp } from "./components/signup/Signup";
import Searchresult from "./components/Searchresult";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/search' element={<Searchresult/>}/>
      </Routes>
    </HashRouter>

  );
};
