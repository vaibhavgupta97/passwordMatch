import {useState} from 'react';
import './App.css';

function App() {
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirnPassword]=useState("")
 const handleChange=(e)=>{
    setPassword(e.target.value)
   // console.log(password.toString());
  }

const handlePass=(e)=>{
    setConfirnPassword(e.target.value)
    //console.log(confirmPassword)
  }
  return (
    <div className="app">
       
    {(password.toString()===confirmPassword.toString() && password.length!==0)?
    (<form className="passwordForm">
    <input type="password" placeholder="Please enter the password" onChange={handleChange}  name="password1" value={password}/>
    <input type="password" placeholder="Confirm Password" onChange={handlePass} name="password2" value={confirmPassword}/>
    <button>Submit</button></form>):<form className="passwordForm">
    <input type="password" placeholder="Please enter the password" onChange={handleChange}  name="password1" value={password}/>
    <input type="password" placeholder="Confirm Password" onChange={handlePass} name="password2" value={confirmPassword}/>
    </form>
    }
   
    </div>
  );
}

export default App;
