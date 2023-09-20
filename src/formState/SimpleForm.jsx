import { useState } from "react";

export default function SimpleForm() {
  const [inputData, setInputData] = useState({})
  const [singleFormData, setSingleFormData] = useState()

  const handleInput = (e) =>{
    setInputData({...inputData,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setSingleFormData(inputData)
    console.log(inputData.firstName)
  }
    return (
      <div className="App">
       <h1>Simple Form</h1>
       <form action="">
        <input type="text" name="firstName" placeholder="First Name" onChange={handleInput}/><br/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleInput}/><br/>
        <input type="text" name="email" placeholder="Email" onChange={handleInput}/><br/>
        <input type="text" name="password" placeholder="Password" onChange={handleInput}/><br/>
        <input type="submit" name="register" onClick={handleSubmit}/><br/>
       </form>
       {/* {inputData.map(item=>item.firstName)} */}
      </div>
    );
  }
  
