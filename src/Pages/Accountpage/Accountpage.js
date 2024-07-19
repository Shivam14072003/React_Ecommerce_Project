import React, { useState } from 'react';
import './Accountpage.css';
import pic from '../../Images/image1.png';

const Accountpage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const showLoginForm = () => {
        setIsLogin(true);
    };

    const showRegisterForm = () => {
        setIsLogin(false);
    };

    return (
        <div className="account-page">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={pic} alt="Illustration" />
                    </div>
                    <div className="col-2">
                        <div className="form-container">
                            <div className="form-btn">
                                <span onClick={showLoginForm}>Login</span>
                                <span onClick={showRegisterForm}>Register</span>
                                <hr id="indicator" style={{ transform: isLogin ? 'translateX(0)' : 'translateX(100px)' }} />
                            </div>
                            <form className={isLogin ? 'active' : ''} id="loginForm">
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" className="btn">Login</button>
                                <a href="#">Forgot password</a>
                            </form>
                            <form className={!isLogin ? 'active' : ''} id="regForm">
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" className="btn">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accountpage;
