import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from 'context/authContext'
import { useDocumentTitle } from 'utils/hooks'
import { logo } from 'assets/icons'

import './signup.css'

function SignUp(){
    
    useDocumentTitle('Playtube | SignUp')

    const [user, setUser] = useState({firstName:'',lastName:'',email:'',password:''})
    const { signupHandler } = useAuth()

    return(
        <div className="flex-layout flex-center auth-parent">
            <form className="flex-column glass-card signup-form" onSubmit={(e)=>signupHandler(e, user)}>
                <div className="flex-column flex-center">
                    <Link to="/" className="flex-center">
                        <img className="header-logo" src={logo}
                            alt="playtube logo"/>
                    <span className="header-title">PlayTube</span>
                    </Link>
                    <input type="text" placeholder="First Name" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, firstName: e.target.value})} />
                    <input type="text" placeholder="Last Name" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, lastName: e.target.value})} />
                    <input type="text" placeholder="Email" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, email: e.target.value})} />
                    <input type="password" placeholder="Password" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, password: e.target.value})} />
                    <div className="flex-layout w-100 space-between">
                        <div className="flex-layout">
                            <input id='terms' type="checkbox"/> 
                            <label for='terms' className="fs-13px">I agree to all the terms and conditions.</label>
                        </div>   
                    </div>
                    <div className="mg-1 w-100">
                    <button className="auth-btn">SignUp</button>
                    </div>
                    <Link className="link-txt" to="/login">Login with existing account</Link>
                </div>
            </form>
        </div>
    )
}

export { SignUp }