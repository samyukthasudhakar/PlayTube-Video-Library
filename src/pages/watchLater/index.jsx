import { watchLater } from 'assets/icons'
import { Header, SideNavBar, NotSignedIn, VideoCard } from 'components'
import { useAuth, useWatchLater } from 'context'
import { useDocumentTitle } from 'utils/hooks'

function WatchLaterPage(){

    useDocumentTitle('Playtube | Watch Later')
    
    const { authState:{isLoggedIn}} = useAuth()
    const { watchLaterState, clearWatchLater } = useWatchLater()
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
                        <p className="flex-layout flex-center liked-heading" ><img src={ watchLater } style={{width:'1.5rem', paddingRight:'3px'}}/> Watch Later </p> 
                        <button className='cta-btn' onClick={clearWatchLater}>Clear</button>
                        </div>
                        <div className='flex-layout flex-wrap '>
                        {
                           watchLaterState.map(video => <VideoCard key={video._id} video={video}/>)
                        }
                        </div>
                        </div>
                        :<NotSignedIn icon={watchLater} name="Videos saved" tagline="Enjoy your favourite videos" />
                    }
                </div>
            </div>
        </div>
    )
}

export { WatchLaterPage }