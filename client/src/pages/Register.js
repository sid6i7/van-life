import React, { useState } from "react";
import "../css/Register.css";
import { Link } from "react-router-dom";


export const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        user_type: ""
    });

    const handleRegister = async () => {
        
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
        <div className="register">
            <h1 className="register--title">Register Your Account</h1>
            <div className="register--form">
                <input className="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                />
                <input className="input"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input className="input"
                    type="password"
                    name="password" 
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input
                    type="radio"
                >
                    
                </input>
                <button
                    className="register--btn"
                    onClick={handleRegister}
                >Register</button>
                <p className="already-registered">
                    Already have an account? <Link
                        to={"../login"}
                    >Login now
                    </Link>
                </p>
            </div>
        </div>
    );
};
