import React, { useState } from "react";
import "../css/Login.css";

export const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(formData => {
            return {
                ...formData,
                [name]: value
            }
        });
        console.log(formData);
    }

    return (
        <div className="login">
            <h1 className="login--title">Sign in to your account</h1>
            <div className="login--form">
                <input className="login--input"
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                value={formData.email}
                />
                <input className="login--input"
                type="password"
                name="password" 
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                />
                <button className="login--btn">Sign in</button>
                <p className="login--no-account">
                    Don't have an account? <span>Create one now</span>
                </p>
            </div>
        </div>
    );
};
