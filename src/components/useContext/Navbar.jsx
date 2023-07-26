import React, { useContext } from 'react'
import context from './Context';

const Navbar = () => {
    const theme = useContext(context)
    console.log("Navbar Called");
  return (
    <div className={theme?'dark':'light'}>Navbar</div>
  )
}

export default Navbar