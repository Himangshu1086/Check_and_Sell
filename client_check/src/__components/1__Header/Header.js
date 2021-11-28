import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="bg-dark" style={{ top:"4%" , width:"50%" ,left:"25%", zIndex:"5" ,position:"absolute" , padding:"5px" , borderRadius:"5px"}}>
            <ul className="nav justify-content-center">
                <li className="nav-item" >
                    <Link to="/" className="nav-link active text-light" >Check</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link text-light" >Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link text-light" >About</Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link disabled" tabindex="-1" aria-disabled="true">Sign In</Link>
                </li>
                <li className='nav-item'>
            <div class="input-group w-100">
                <input type="search" placeholder='search for product' id="form1" class="form-control" />
                <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>
            </div>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link disabled" tabindex="-1" aria-disabled="true">Cart</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Header
