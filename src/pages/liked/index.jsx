import { like } from 'assets/icons'
import { Header, SideNavBar, NotSignedIn } from 'components'

function LikedPage(){
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='video-listing' >
                <NotSignedIn icon={like} name="Videos liked" tagline="Enjoy your favourite videos" />
                </div>
            </div>
        </div>
    )
}

export { LikedPage }