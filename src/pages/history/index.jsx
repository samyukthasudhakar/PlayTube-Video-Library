import { history } from 'assets/icons'
import { Header, SideNavBar, NotSignedIn, VideoCard } from 'components'
import { useAuth, useHistory } from 'context'
import { useDocumentTitle } from 'utils/hooks'

import './history.css'

function HistoryPage(){

    useDocumentTitle('Playtube | History')

    const { authState:{isLoggedIn}} = useAuth()
    const { historyState, clearHistory } = useHistory()

    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='video-listing' >
                    {
                        isLoggedIn ?
                        <div>
                        <div className='flex-layout space-between liked-parent p-bt-1'>
                        <p className="flex-layout flex-center liked-heading" ><img src={ history } style={{width:'1.5rem', paddingRight:'3px'}}/> History </p> 
                        <button className='cta-btn' onClick={clearHistory}>Clear</button>
                        </div>
                        <div className='flex-layout flex-wrap '>
                        {
                            historyState.map(video => <VideoCard key={video._id} video={video}/>)
                        }
                        </div>
                        </div>
                        :<NotSignedIn icon={history} name="History" tagline="Keep track of what you watch" />
                         
                    }
                
                </div>
            </div>
        </div>
    )
}

export { HistoryPage }