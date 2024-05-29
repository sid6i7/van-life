import React, { useState } from "react";
import "../../css/Login.css";
import { login } from "../../api/userApi";
import { Link, redirect } from "react-router-dom";

export const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isAuthorized, setIsAuthorized] = useState(false);

    const handleLogin = async () => {
        try {
            await login(formData.email, formData.password);
            console.log('authorized');
            setIsAuthorized(true);
        } catch(err) {
            console.log('not authorized');
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(formData => {
            return {
                ...formData,
                [name]: value
            }
        });
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
                <button
                    className="login--btn"
                    onClick={handleLogin}
                >Sign in</button>
                <p className="login--no-account">
                    Don't have an account? <Link to={"../register"}>Create one now</Link>
                </p>
            </div>
        </div>
    );
};
