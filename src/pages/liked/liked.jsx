import { like } from '../../assets/icons'
import { Header, SideNavBar, NotSignedIn } from '../../components'

function LikedPage(){
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div style={{backgroundColor:"#f9f9f9", width:"100vw"}} >
                <NotSignedIn icon={like} name="Videos liked" tagline="Enjoy your favourite videos" />
                </div>
            </div>
        </div>
    )
}

export { LikedPage }