import {useState} from 'react'
import thumbnail from 'assets/thumbnail.png'
import {menu} from 'assets/icons'
import './videoCard.css'

import { MenuPopUp } from 'components/menuPopUp';

export function VideoCard(){

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <div className="video-card">
            <img className="thumbnail" src={thumbnail} />
            <span className="time-badge">10:00</span>
            <div className="flex-layout video-description">
                <img className="avatar" src={thumbnail}/>
                <div className="flex-layout space-between">
                    <div className="flex-column space-between video-details">
                        <p className="video-title">How to garden for beginners | Basics and tips</p>
                        <div>
                            <p className="creator-name">Gardening 101</p>
                            <p className="video-views">100K views • 10K likes</p>
                        </div>
                    </div>
                    <img className='menu' src={menu} onClick={()=>setMenuToggle(!menuToggle)}/>
                </div>
                {
                    menuToggle && <MenuPopUp />
                }
            </div>
        </div>
    )
}