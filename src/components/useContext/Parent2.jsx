import React, { useContext } from 'react'
import context from './Context';

const Parent2 = () => {
  const theme = useContext(context)
  console.log("Parent2 Called");

  return (
    <div  className={theme?'dark':'light'}>Parent2</div>
  )
}

export default Parent2