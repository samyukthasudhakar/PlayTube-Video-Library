import { useParams } from 'react-router-dom'
import { usePlayList } from 'context'
import { Header, SideNavBar, VideoCard } from 'components'

function PlaylistListing(){
    const { playlists, deleteFromPlaylist } = usePlayList()
    let { playlistID } = useParams()
    playlistID = playlistID.split(':')[1]
    const {title: playlistName = '', videos: playlistVideos = []} = playlists.filter(playlist => playlist._id === playlistID)[0]
    
    return(
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='flex-column video-listing' >
                <div className='flex-column flex-start liked-parent p-bt-1'>
                <p className="flex-layout flex-center liked-heading">{playlistName}</p> 
                </div>
                <div className='flex-layout flex-wrap '>
                    {
                        playlistVideos.map(video => (
                        <div key = {video._id} className="relative">
                            <VideoCard key={video._id} video={video}/>
                            <div className="flex-layout">
                                <button className="playlist-listing-dismiss" onClick={()=>deleteFromPlaylist( playlistID, video._id )}><i className="fa fa-times"></i></button>
                            </div>
                        </div>))
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export { PlaylistListing }