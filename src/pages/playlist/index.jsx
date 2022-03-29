import { playlist } from 'assets/icons'
import { 
    Header, 
    SideNavBar,
    NotSignedIn
} from 'components'

function PlaylistPage(){
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='video-listing' >
                <NotSignedIn icon={playlist} name="Playlists" tagline="Enjoy your favourite playlists" />
                </div>
            </div>
        </div>
    )
}

export { PlaylistPage }