import {useState} from 'react'
import {menu} from 'assets/icons'
import './videoCard.css'

import { MenuPopUp } from 'components/menuPopUp';

export function VideoCard( {video} ){
    const {thumbnail, duration, icon, title, creator, views, likes} = video
    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <div className="video-card">
            <img className="thumbnail" src={thumbnail} />
            <span className="time-badge">{duration}</span>
            <div className="flex-layout video-description">
                <img className="avatar" src={icon}/>
                <div className="flex-layout space-between">
                    <div className="flex-column video-details">
                        <p className="video-title">{title}</p>
                        <div>
                            <p className="creator-name">{creator}</p>
                            <p className="video-views">{`${views} views • ${likes} likes`}</p>
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