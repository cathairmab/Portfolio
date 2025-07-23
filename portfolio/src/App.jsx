import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

//import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import About from "./components/About";
//import Projects from "./components/Projects";
//import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App
