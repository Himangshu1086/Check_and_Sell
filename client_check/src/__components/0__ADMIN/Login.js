import React from 'react'
import '../../__static/1__Login/Login.css'
function Login() {
    return (
    <div className="box">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <div class="fadeIn first">
                <img src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" id="icon" alt="User Icon" />
                </div>


                <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
                <input type="submit" class="fadeIn fourth" value="Log In"/>
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
