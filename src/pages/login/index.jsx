import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { logo } from 'assets/icons'
import { useAuth } from 'context/authContext'
import { useDocumentTitle } from 'utils/hooks'
import './login.css'

function Login(){

    useDocumentTitle('Playtube | Login')

    const { loginHandler } = useAuth()
    
    const [user, setUser] = useState({email:'',password:''})
    const show = {type: "text", icon: ""}
    const hide = {type: "password", icon: "-slash"}
    const [passwordToggle, setPasswordToggle] = useState(hide)
    

    return(
        <div className="flex-center auth-parent">    
            <form className="flex-column glass-card login-form space-between" onSubmit={(e)=>loginHandler(e, user)}>
                <div className="flex-column flex-center">
                    <Link to="/" className="flex-center">
                        <img className="header-logo" src={logo}
                            alt="playtube logo"/>
                    <span className="header-title">PlayTube</span>
                    </Link>
                    <input type="text" placeholder="Email" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, email:e.target.value})} value={user.email} />
                    <div className='flex-layout flex-center space-between form-input mg-tb-1'>
                    <input type={passwordToggle.type} placeholder="Password" className='form-password' onInput={(e)=>setUser({...user, password:e.target.value})} value={user.password}/>
                    <i className={`fa fa-eye${passwordToggle.icon}`} onClick={()=>setPasswordToggle(passwordToggle.type==='text'?hide:show)}/>
                    </div>
                    <div className="flex-layout space-between w-100">
                        <div className="flex-layout">
                            <input id='remember-me' type="checkbox"/> 
                            <label for='remember-me' className="fs-13px">Remember me</label>
                        </div>
                        <Link className="link-txt" to="*">Forgot Password ?</Link>      
                    </div>
                    <div className="mg-1 w-100">
                    <button className="auth-btn">Login</button>
                    <button className="auth-btn-secondary" onClick={(e)=>{
                        setUser({email:'johndoe@gmail.com',password:'john123'})
                        loginHandler(e,{email:'johndoe@gmail.com',password:'john123'})}}>Login as Guest</button>
                    </div>
                    <Link className="link-txt" to="/signup">{"Create New Account >>"}</Link>
                </div>
            </form>
        </div>
    )
}

export { Login }