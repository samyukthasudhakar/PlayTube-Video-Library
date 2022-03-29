import { watchLater } from 'assets/icons'
import { Header, SideNavBar, NotSignedIn } from 'components'

function WatchLaterPage(){
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='video-listing' >
                <NotSignedIn icon={watchLater} name="Videos saved" tagline="Enjoy your favourite videos" />
                </div>
            </div>
        </div>
    )
}

export { WatchLaterPage }