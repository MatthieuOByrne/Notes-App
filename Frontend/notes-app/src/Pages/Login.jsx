import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
export const Login = (props) => {
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return (
        <div className="Forms_Sign_In">
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
            <Link to="/register">Register</Link>
        </div>
    )
}