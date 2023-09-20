export default function MultiForm() {
    return (
      <div className="App">
       <h1>Multi Form</h1>
       <form action="">
        <input type="text" name="firstName"/><br/>
        <input type="text" name="lastName"/><br/>
        <input type="text" name="email"/><br/>
        <input type="text" name="password"/><br/>
        <input type="text" name="address"/><br/>
        <input type="submit" name="register"/><br/>
       </form>
      </div>
    );
  }