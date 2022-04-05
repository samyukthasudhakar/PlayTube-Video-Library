import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Header, SideNavBar, PlayListPopup } from 'components'
import { addToPlaylist, watchLater } from 'assets/icons'
import { ReactComponent as Like } from 'assets/icons/like.svg';
import { ReactComponent as Dislike } from 'assets/icons/dislike.svg';
import { useAuth, useVideos, useLikedVideos, useHistory } from 'context';
import useScrollToTop from 'utils/hooks/useScrollToTop'

import './singleVideoPage.css'
import { useEffect } from 'react';

function SingleVideoPage(){
    const { data: {videos} } = useVideos()
    let { videoID } = useParams()
    videoID = videoID.split(':')[1]
    const [video]  = videos.filter(video => video._id == videoID)
    const {_id, src, title, views, date} = video
    const { likedVideos, likeToggle } = useLikedVideos()
    const liked = likedVideos.filter(video => video._id == _id).length > 0 ? "black" : "none"
    const { addToHistory } = useHistory()
    const {authState:{isLoggedIn}} = useAuth()
    const [playlistToggle, setPlaylistToggle] = useState(false)
    const navigateTo = useNavigate()
    useScrollToTop()
    useEffect(()=>{
        addToHistory(video)
    },[])
    return (
        <div>
            <Header />
            <div className="flex-layout">
            <SideNavBar />
            <div className='flex-layout video-listing padding-2'>
            <div>
            <iframe width="730" height="400" style={{border:'none',margin:'0 2rem', borderRadius:'3px'}}
            src={`https://www.youtube.com/embed/${src}`}>
            </iframe>
            <p className="single-video-title">{`${title}`}</p>
            <div className='flex-layout'>
                <p className="video-details-secondary">{`${views} views • ${date}`}</p>
                <p className="flex-layout flex-center padding-rl-2" onClick={()=>likeToggle(video)}><Like fill={liked}/>244k</p>
                <p className="flex-layout flex-center padding-rl-2" >{<Dislike fill="none" />}Dislike</p>
                <div className="flex-layout flex-center padding-rl-2" onClick={()=>setPlaylistToggle(!playlistToggle)}><img src={addToPlaylist} style={{width: "2rem", height: '2rem', marginRight:"8px"}}/>Save</div>
                <p className="flex-layout flex-center padding-rl-2" ><img src={watchLater} style={{width: "1.2rem", height: '1.2rem', marginRight:"8px"}}/>Watch Later</p>
            </div>
            </div>
            {/* please ignore : this is temporary code until i build the sidebar with suggested videos listed */}
            <div className='flex-column'>
            <div style={{width:'20rem', height: '10rem', backgroundColor: "grey", color: "grey", marginBottom: "1.5rem", marginRight:"1rem"}}>.</div>
            <div style={{width:'20rem', height: '10rem', backgroundColor: "grey", color: "grey", marginBottom: "1.5rem", marginRight:"1rem"}}>.</div>
            <div style={{width:'20rem', height: '10rem', backgroundColor: "grey", color: "grey", marginBottom: "1.5rem", marginRight:"1rem"}}>.</div>
            <div style={{width:'20rem', height: '10rem', backgroundColor: "grey", color: "grey", marginBottom: "1.5rem", marginRight:"1rem"}}>.</div>
            <div style={{width:'20rem', height: '10rem', backgroundColor: "grey", color: "grey", marginBottom: "1.5rem", marginRight:"1rem"}}>.</div>
            <div style={{width:'20rem', height: '10rem', backgroundColor: "grey", color: "grey", marginBottom: "1.5rem", marginRight:"1rem"}}>.</div>
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