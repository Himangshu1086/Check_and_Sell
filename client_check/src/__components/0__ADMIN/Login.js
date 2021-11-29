import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../__static/1__Login/Login.css'
function Login() {

    const history = useHistory();
    const [rollNumber, setRollNumber] = useState("");
    const [ password , setPassword ] = useState("");
  



    // function to login

const userLogin = async (e) =>{
    e.preventDefault();
  
    
    const res = await fetch("/signIn" ,{
      method:"POST" ,
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        rollNumber , password
      })
    });
  
    const data = await res.json();

    if(data.status === 422 || !data)
    {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
  }
      if(data.error){
        window.alert("Invalid Credentials")
      }
    else
    {
      
        window.alert("Login Successfully");
        console.log("login successful");
        history.push("/addproducts");
        window.location.reload();
        
    }
  
  }


    return (
    <div className="box">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <div class="fadeIn first">
                <img src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" id="icon" alt="User Icon" />
                </div>


                <form className='mt-4'>
                <input type="text" id="login" class="fadeIn second bg-dark text-light" name="Roll Number"
                 value={rollNumber}
                 onChange={(e)=>{setRollNumber( e.target.value)}}
                placeholder="Roll Number"/>
                <input type="text" id="password" class="fadeIn third bg-dark text-light" name="login" 
                 value={password}
                 onChange={(e)=>{setPassword( e.target.value)}}
                placeholder="password"/><br/>
                <button onClick={userLogin}  type="submit" class="fadeIn fourth btn btn-primary m-2" value="Log In">Sign In</button>
                </form>


                <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
    </div>
  
    )
}

export default Login
