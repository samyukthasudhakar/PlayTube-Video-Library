import React from 'react'
import { Link } from 'react-router-dom'
import { youtube } from '../../assets/icons'
import './header.css'

function Header(){

    return(
        <header className="flex-space-btwn header-container">
            <Link to="/" className="flex-center">
                <img className="header-logo" src={youtube}
                    alt="playtube logo"/>
            <span className="header-title">Playtube</span>
            </Link>
            <button className='cta-btn'>Login</button>
        </header>
    );
}

export { Header }