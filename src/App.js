
import React from 'react'
import context from './components/useContext/Context';
import './App.css';
import { useState } from 'react';
import Navbar from './components/useContext/Navbar'
import Parent1 from './components/useContext/Parent1';
import Parent2 from './components/useContext/Parent2';
function App() {
  const [theme,setTheme] = useState(false) 
  return (
   <context.Provider value={theme}>
    <button onClick={()=>setTheme(!theme)}>Change Theme</button>
    <Navbar/>
    <Parent1/>
    <Parent2/>
   </context.Provider>
  );
}

export default App;
