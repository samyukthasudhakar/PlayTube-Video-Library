import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Header, SideNavBar, PlayListPopup, VideoRecommendationCard } from 'components'
import { addToPlaylist, watchLater } from 'assets/icons'
import { ReactComponent as Like } from 'assets/icons/like.svg'
import { useAuth, useVideos, useLikedVideos, useHistory, useWatchLater } from 'context'
import { useDocumentTitle, useScrollToTop } from 'utils/hooks'
import checkIfPresent from 'utils/functions/checkIfPresent'

import './singleVideoPage.css'
import { useEffect } from 'react';

function SingleVideoPage(){
    
    useDocumentTitle('Playtube | Watch')
    useScrollToTop()
    
    const { data: {videos} } = useVideos()
    let { videoID } = useParams()
    videoID = videoID.split(':')[1]
    const [video]  = videos.filter(video => video._id == videoID)
    const {_id, src, title, views, date, icon, creator, category} = video
    const { likedVideos, likeToggle } = useLikedVideos()
    const liked = likedVideos.filter(video => video._id == _id).length > 0 ? "black" : "none"
    const { addToHistory } = useHistory()
    const {authState:{isLoggedIn}} = useAuth()
    const [playlistToggle, setPlaylistToggle] = useState(false)
    const { watchLaterState, addToWatchLater, removeFromWatchLater } = useWatchLater()
    const navigateTo = useNavigate()
    
    useEffect(()=>{
        addToHistory(video)
    },[video])

    return (
        <div>
            <Header />
            <div className="flex-layout">
            <SideNavBar />
            <div className='flex-layout video-listing padding-2'>
            <div>
            <iframe width="700" height="400" style={{border:'none',margin:'0 2rem', borderRadius:'3px'}}
            src={`https://www.youtube.com/embed/${src}`}>
            </iframe>
            <p className="single-video-title">{`${title}`}</p>
            <div className='flex-layout flex-end'>
                <p className="video-details-secondary">{`${views} views • ${date}`}</p>
                <p className="flex-layout flex-center padding-rl-2" onClick={()=>likeToggle(video)}><Like fill={liked}/>244k</p>
                <div className="flex-layout flex-center padding-rl-2" onClick={()=>setPlaylistToggle(!playlistToggle)}><img src={addToPlaylist} style={{width: "2rem", height: '2rem', marginRight:"8px"}}/>Save</div>
                <p className="flex-layout flex-center padding-rl-2" onClick={() =>{
                    !checkIfPresent( video._id, watchLaterState) ?
                    addToWatchLater(video):
                    removeFromWatchLater(video)
                }}><img src={watchLater} style={{width: "1.2rem", height: '1.2rem', marginRight:"8px"}}/>Watch Later</p>
            </div>
            <div style={{display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}>
            <div className="flex-layout flex-center">
            <img className="avatar mg-8px" src={icon}/>
            <p class="p-md p-bold">{creator}</p>
            </div>
            </div>
            </div>
            <div className='flex-column'>
            <div className="flex-layout flex-start" style={{marginBottom:"1rem"}}>
            <p className="active-category-link" style={{width:"content-fit"}}>{category}</p>
            </div>
            {
                videos.filter(video => video._id != videoID && video.category == category ).map(video => <VideoRecommendationCard video={video} /> )
            }
            </div>
            </div>
            </div>
            {
                playlistToggle ?
                isLoggedIn ? 
                <PlayListPopup video={video}/>
                : navigateTo('/login')
                :''
            }
        </div>
    )
}

export { SingleVideoPage }