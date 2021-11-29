import React, { useState } from 'react'
import '../../__static/1__Login/Login.css'
import { useHistory } from 'react-router-dom'
function SignUp() {

    const history = useHistory();

    const [ user , setUser ] = useState({
         rollNumber:"" , password:"" , conformPass:""
    });

    let name  , value  ;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user , [name]:value})

        
    }


    const addNewUser =  async (e) =>{
        e.preventDefault();
        const { rollNumber, password, conformPass} = user ;


        const res = await fetch('/signUp' , {

            method:"POST" ,
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                rollNumber, password, conformPass
            })

        }); 

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else
        {
            window.alert("Welcome to the family ");
            console.log("Registration successful");
            history.push("/signIn");
        }

    }



    
    return (
        <div>
            <div className="sign__up__container" >
                <h1 className="sign__up__heading">CREATE ACCOUNT</h1>
                <form method="POST" type="submit" className="sign__up__form" >
                    <input type="text" placeholder="Roll Number" 
                    name="rollNumber"
                    value={user.rollNumber}
                    onChange={handleInputs}

                    ></input>
                    <input type="text" placeholder="Password" required 
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                    
                    ></input>
                    <input type="text" placeholder="Confirm Password" required
                    autoComplete="off"
                    name="conformPass"
                    value={user.conformPass}
                    onChange={handleInputs}
                    ></input>
                    <button  onClick={addNewUser}>Sign Up</button>
                </form>
            </div>
            
        </div>
    )
}

export default SignUp