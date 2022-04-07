import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, useVideos } from 'context/'
import { logo } from 'assets/icons'
import './header.css'

function Header(){
    const navigateTo = useNavigate()
    const { authState:{isLoggedIn}, authDispatch } = useAuth()
    const { videosDispatch } = useVideos()
    function logOutHandler (){
        
        const response = window.confirm('You are logging out. Choose "Ok" if you are sure.')
        if (response) {
        videosDispatch({type: 'SET_CATEGORY_FILTER', payload: 'All'})
        authDispatch({type:'LOG_OUT',payload:''})
        navigateTo("/")
        }
        
    }

    return(
        <header className="flex-space-btwn header-container">
            <Link to="/" className="flex-center">
                <img className="header-logo" src={logo}
                    alt="playtube logo"/>
            <span className="header-title">PlayTube</span>
            </Link>
            {
                isLoggedIn?
                <button className='cta-btn' onClick={ logOutHandler }>Logout</button>
                :<button className='cta-btn' onClick={()=>navigateTo("/login")}>Login</button>
            }
            
        </header>
    );
}

export { Header }