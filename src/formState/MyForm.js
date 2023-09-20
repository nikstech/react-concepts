import { useState } from "react";
import MultiForm from "./MultiForm";
import SimpleForm from "./SimpleForm";

export default function MyForm() {
    const [form,setForm] = useState('Single Form')
    const handleEvent = (e) =>{
        const radioValue = e.target.value;
        setForm(radioValue)
    }
    return (
        <div className="App">
            <label>Simple Form <input type="radio" name="formtype" defaultChecked value="Single Form" onClick={handleEvent}/> </label>
            <label>Multiple Form <input type="radio" name="formtype" value="Multiple Form" onClick={handleEvent}/> </label>
            {form === 'Single Form' ? <p><SimpleForm /> </p> : <p><MultiForm /> </p> }
        </div>
    );
}

