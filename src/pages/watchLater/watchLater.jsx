import { watchLater } from '../../assets/icons'
import { Header, SideNavBar, NotSignedIn } from '../../components'

function WatchLaterPage(){
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div style={{backgroundColor:"#f9f9f9", width:"100vw"}} >
                <NotSignedIn icon={watchLater} name="Videos saved" tagline="Enjoy your favourite videos" />
                </div>
            </div>
        </div>
    )
}

export { WatchLaterPage }