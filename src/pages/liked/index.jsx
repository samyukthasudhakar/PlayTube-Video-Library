import { useAuth, useLikedVideos } from 'context'
import { like } from 'assets/icons'
import { Header, SideNavBar, NotSignedIn, VideoCard } from 'components'
import { ReactComponent as Like } from 'assets/icons/like.svg';

import './liked.css'

function LikedPage(){
    const {authState:{isLoggedIn}} = useAuth()
    const { likedVideos } = useLikedVideos()
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='video-listing' >
                    {
                        isLoggedIn ?
                        <div>
                        <div className='flex-column flex-start liked-parent'>
                        <p className="flex-layout flex-center liked-heading" ><Like fill="none"/> Liked Videos</p> 
                        </div>
                        <div className='flex-layout flex-wrap '>
                        {
                            likedVideos.map(video => <VideoCard key={video._id} video={video}/>)
                        }
                        </div>
                        </div>
                        :<NotSignedIn icon={like} name="Videos liked" tagline="Enjoy your favourite videos" />
                    }
                </div>
            </div>
        </div>
    )
}

export { LikedPage }