import { Link } from 'react-router-dom'
import { playlist } from 'assets/icons'
import { 
    Header, 
    SideNavBar,
    NotSignedIn
} from 'components'
import { useAuth, usePlayList } from 'context'

import './playlist.css'

function PlaylistPage(){
    const {authState:{isLoggedIn}} = useAuth()
    const { playlists, deletePlaylist } = usePlayList()
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='video-listing' >
                    {
                        isLoggedIn ?
                        <div>
                        <div className='flex-column flex-start liked-parent p-bt-1'>
                        <p className="flex-layout flex-center liked-heading" ><img src={ playlist } className='heading-icon' />Playlists</p> 
                        </div>
                        <div className="flex-layout" >
                            {
                                playlists.map((item,key)=>
                                <div className="flex-column flex-center glass-card playlist-card" >
                                <Link to={`/playlist/:${item._id}`}><h2 key={key}>{item.title}</h2></Link>
                                <p className='p-sm'>{`${item.videos.length} ${item.videos.length===1 ? 'video':'videos'}`}</p>
                                <div className="flex-layout">
                                    <button className="playlist-dismiss" onClick={()=>deletePlaylist(item._id)}><i className="fa fa-times"></i></button>
                                </div>
                                </div>
                                )
                            }
                        </div>
                        </div>
                        :<NotSignedIn icon={playlist} name="Playlists" tagline="Enjoy your favourite playlists" />
                    }
                </div>
            </div>
        </div>
    )
}

export { PlaylistPage }