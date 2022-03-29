import {
    playlist,
    watchLater,
} from "assets/icons";

export function MenuPopUp(){
    return (
        <ul className="menu-options flex-start">
            <li className='menu-option'>
                <div className="flex-layout">
                <img className="menu-icon" src={watchLater} />Add to WatchLater
                </div>
            </li>
            <li className='menu-option'>
                <div className="flex-layout">
                <img className="menu-icon" src={playlist} />Add to Playlist
                </div>
            </li>
        </ul>
    )
}