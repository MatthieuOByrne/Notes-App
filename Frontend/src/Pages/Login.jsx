import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
//const requests = require('requests');

/**request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Show the HTML for the Google homepage.
  }
});**/
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        //event.preventDefault();
        console.log(email);
        // requests.get('http://localhost:5555/register')
        // .then(response => {
        //     console.log(response.text);
        // });

    };

    return (
        <div className="Forms_Sign_In">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <button type="submit" onSubmit={handleSubmit()} className="btn btn-primary">Sign in</button>
                </div>
            </form>
            <Link to="/register">Register</Link>
        </div>
    );
};