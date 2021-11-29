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
        <div className='container shadow-lg p-3 mb-5 bg-white rounded' style={{marginTop:"120px" ,display:"flex",flexDirection:"column" , height:"80vh" , textAlign:"center"}}>
            <Link to="/signUp"><h1 className='text-primary'>Sign Up</h1></Link>
            <Link to="/login"><h1 className='text-primary'>Sign In</h1></Link>
            <Link to="/addproducts" className='text-primary'><h1>Add Product</h1></Link>
            <h1 onClick={logout} className='text-danger'>Logout</h1>
        </div>
    )
}

export default Admin
