import React from "react";
// import './SignIn.css';

const Register = (prop) => {
    return (
        <div className="pa4 br3 shadow-5 f6 w-40 center white">
            <main className="pa1 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Name</label>
                            <input className="pa2 input-reset bg-white-70 ba br2 w-100" style={{ outline: "none", border:  "none"}} type="name" name="Fullname"  id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Email</label>
                            <input className="pa2 input-reset bg-white-70 ba br2 w-100" style={{ outline: "none", border:  "none"}} type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6">Password</label>
                            <input className="pa2 input-reset bg-white-70 ba br2 w-100" style={{ outline: "none", border:  "none"}} type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                            onClick={()=> prop.onRouteChange("signin")}
                            className="b br2 ph3 pv2 input-reset ba grow pointer f6 dib" 
                            style={{ outline: "none", border:  "none", background: "rgb(61, 223, 255)"}} 
                            type="submit" 
                            value="Register" />
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer" onClick={()=> prop.onRouteChange("signin")}>Sign In</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register;