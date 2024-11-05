import React from "react";
import "../Styles/AccountInfo.css";
import "../Styles/Styles.css";

const AccountInfo = () => {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Account Info</h2>
                <ul>
                    <li><a href="#" className="active"><span role="img" aria-label="globe">🌐</span> General</a></li>
                    <li><a href="#"><span role="img" aria-label="credit card">💳</span> Billing & payment</a></li>
                    <li><a href="#"><span role="img" aria-label="clipboard">📋</span> Order History</a></li>
                    <li><a href="#"><span role="img" aria-label="shopping cart">🛒</span> Cart</a></li>
                </ul>
                <div className="buttons">
                        <button type="button" className="cancel">Cancel</button>
                        <button type="submit" className="save">Save Changes</button>
                        <button type="button" className="logout">Log Out</button>
                    </div>
            </div>

            {/* Main Content */}
            <div className="content">
                <h2>General</h2>
                <form className="account-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"  />

                    <label htmlFor="address">Address</label>
                    <textarea id="address"  />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone"  />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                    
                </form>
                <div className="forgetpassword">
                <h4>change password</h4>
                </div>
    
            </div> 
           


        </div>
    );
};

export default AccountInfo;
