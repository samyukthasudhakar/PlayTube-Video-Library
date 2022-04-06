import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {menu} from 'assets/icons'
import { useAuth } from 'context'
import './videoCard.css'

import { MenuPopUp, PlayListPopup } from 'components';

export function VideoCard( {video} ){
    const {_id, thumbnail, duration, icon, title, creator, views, likes} = video
    const [menuToggle, setMenuToggle] = useState(false)
    const [playlistToggle, setPlaylistToggle] = useState(false)
    const {authState:{isLoggedIn}} = useAuth()
    const navigateTo = useNavigate()
    return (
        <div className="video-card">
            <Link to={`/watch/:${_id}`}>
                <img className="thumbnail" src={thumbnail} />
            </Link>
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
                    menuToggle && <MenuPopUp video={video} playlist={[playlistToggle, setPlaylistToggle]}/>
                }
                {
                    playlistToggle ?
                        isLoggedIn ?
                        <PlayListPopup video={video}/>
                        :navigateTo('/login')
                    :''
                }
            </div>
        </div>
    )
}