import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./Login";


export const Register = (props) => {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [name, SetName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="Forms_Sign_In">
            <fieldset id="Register_Fieldset">
                <form className="Auth_Form_Container" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name:</label>
                    <br />
                    <input required={true} value={name} name="name" onChange={(e) => SetName(e.target.value)} id="Register_Form_Name_Input" placeholder="Joe Shmoe"></input>
                    <br />
                    <label htmlFor='SetEmail'>Email:</label>
                    <br />
                    <input required={true} value={email} onChange={(e) => SetEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='Register_Form_Email_Input' name='email' />
                    <br />
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto">
                            <input required={true} value={password} onChange={(e) => SetPassword(e.target.value)} type="password" placeholder="****************" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <Link className="Link_Login_Or_Register" to="/Login">
                    Already have an account?
                </Link>
            </fieldset>
        </div>
    );
};