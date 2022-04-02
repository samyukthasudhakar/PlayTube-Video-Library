import {
    playlist,
    watchLater,
} from "assets/icons";
import { useWatchLater } from "context";
import checkIfPresent from 'utils/functions/checkIfPresent'

export function MenuPopUp( {video} ){
    const { watchLaterState, addToWatchLater, removeFromWatchLater } = useWatchLater()
    return (
        <ul className="menu-options flex-start">
            {
                !checkIfPresent( video._id, watchLaterState) ?
                <li className='menu-option' onClick={() => addToWatchLater(video)}>
                    <div className="flex-layout">
                    <img className="menu-icon" src={watchLater} />Add to Watch Later
                    </div>
                </li>
                :<li className='menu-option' onClick={() => removeFromWatchLater(video)}>
                    <div className="flex-layout">
                    <img className="menu-icon" src={watchLater} />Remove from Watch Later
                    </div>
                </li>
            }
            <li className='menu-option'>
                <div className="flex-layout">
                <img className="menu-icon" src={playlist} />Add to Playlist
                </div>
            </li>
        </ul>
    )
}