import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Navbar.css'
import logo from '../../Images/logo.png'
import { useNavigate } from "react-router-dom";
import SearchDescription from '../../Pages/SearchDescription/SearchDescription';

const Navbar = () => {
    const navigate = useNavigate();
    return(
        <div className='navbar'>
            <div className='right-navbar'>
                <img src={logo} alt="logo" />
                <SearchDescription />
                
            </div>
            <div className='left-navbar'>
                
                <p onClick={() => navigate("/")}>Home</p>
                <p onClick={() => navigate("/products")}>Products</p>
                <p onClick={() => navigate("/about")}>About Us</p>
                <p onClick={() => navigate("/contact")}>Contact Us</p>
                <p onClick={() => navigate("/account")}>Account</p>
                <div className='cart-logo'>
                <AddShoppingCartIcon />
                </div>
            </div>

        </div>
    )
}
export default Navbar;