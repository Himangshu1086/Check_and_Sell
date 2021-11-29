import React from 'react'
import { Link , useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';
function Admin() {

    const cookies = new Cookies();
    const history = useHistory();

const logout = async()=> {
    cookies.remove("token");
    history.push("/");
    window.location.reload();
}

    return (
        <div className='container' style={{marginTop:"120px" , border:"solid 2px" , height:"80vh" , textAlign:"center"}}>
            <Link to="/signUp"><h1>Sign Up</h1></Link><br/>
            <Link to="/login"><h1>Sign In</h1></Link><br/>
            <Link to="/addproducts"><h1>Add Product</h1></Link>
            <h1 onClick={logout}>Logout</h1>
        </div>
    )
}

export default Admin
