import { history } from 'assets/icons'
import { Header, SideNavBar, NotSignedIn } from 'components'

function HistoryPage(){
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='video-listing' >
                <NotSignedIn icon={history} name="History" tagline="Keep track of what you watch" />
                </div>
            </div>
        </div>
    )
}

export { HistoryPage }