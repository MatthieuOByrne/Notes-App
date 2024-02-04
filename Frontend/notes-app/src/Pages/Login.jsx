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
            <fieldset id="Login_Fieldset">
                <form className="Auth_Form_Container" onSubmit={handleSubmit}>
                    <label htmlFor='SetEmail'>Email:</label>
                    <br />
                    <input required={true} value={email} onChange={(e) => SetEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='Login_Form_Email_Input' name='email' />
                    <br />
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="inputPassword6" className="col-form-label">Password:</label>
                        </div>
                        <div className="col-auto">
                            <input required={true} type="password" placeholder="*************" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
                <Link className="Link_Login_Or_Register" to='/Register'>
                    Don't Have an account?
                </Link>
            </fieldset>
        </div>
    )
}