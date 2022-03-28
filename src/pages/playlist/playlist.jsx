import { playlist } from '../../assets/icons'
import { 
    Header, 
    SideNavBar,
    NotSignedIn
} from '../../components'

function PlaylistPage(){
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div style={{backgroundColor:"#f9f9f9", width:"100vw"}} >
                <NotSignedIn icon={playlist} name="Playlists" tagline="Enjoy your favourite playlists" />
                </div>
            </div>
        </div>
    )
}

export { PlaylistPage }