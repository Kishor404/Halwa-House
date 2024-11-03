import React, { useState } from 'react';
import "../Styles/Login.css";
import "../Styles/Styles.css";

const Login = () => {
    const [isRightPanelActive, setRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };

    return (
        <>
            <section>
                <div className="Login">
                    <div className={`Login-container ${isRightPanelActive ? "Login-right-panel-active" : ""}`} id="Login-container">
                        <div className="Login-form-container Login-sign-up-container">
                            <form className="Login-form" action="#">
                                <h1 className="Login-h1">Create Account</h1>
                                <input className="Login-input" type="text" placeholder="Name" />
                                <input className="Login-input" type="tel" pattern='[0-9]{10}' placeholder="Phone" />
                                <input className="Login-input" type="password" placeholder="Password" />
                                <input className="Login-input" type="password" placeholder="Confirm Password" />
                                <button className="Login-button Login-Signup-button">Sign Up</button>
                            </form>
                        </div>
                        <div className="Login-form-container Login-sign-in-container">
                            <form className="Login-form" action="#">
                                <h1 className="Login-h1">Sign in</h1>
                                <input className="Login-input" type="tel" pattern='[0-9]{10}' placeholder="Phone" />
                                <input className="Login-input" type="password" placeholder="Password" />
                                <a href="#" className="Login-a">Forgot your password?</a>
                                <button className="Login-button Login-Signin-button">Login</button>
                            </form>
                        </div>
                        <div className="Login-overlay-container">
                            <div className="Login-overlay">
                                <div className="Login-overlay-panel Login-overlay-left">
                                    <h1 className="Login-h1">Welcome Back!</h1>
                                    <p className="Login-p">To keep connected with us please login with your personal info</p>
                                    <button className="Login-ghost Login-button" onClick={handleSignInClick}>Sign In</button>
                                </div>
                                <div className="Login-overlay-panel Login-overlay-right">
                                    <h1 className="Login-h1">Hello, Friend!</h1>
                                    <p className="Login-p">Enter your personal details and start your journey with us</p>
                                    <button className="Login-ghost Login-button" onClick={handleSignUpClick}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
