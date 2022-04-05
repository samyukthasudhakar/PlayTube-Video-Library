import { useState } from 'react'
import { usePlayList } from 'context'

import './playlistPopUp.css'

export function PlayListPopup( {video} ){

    const { playlists, addPlaylist, addToPlaylist, deleteFromPlaylist } = usePlayList()
    const [playlistName, setPlaylistName] = useState('')

    function checkBoxHandler(e, id, video){
        e.target.checked === true ?
        addToPlaylist(id, video)
        :deleteFromPlaylist(id, video._id)
    }

    function videoInPlaylist( playlistId, videoId){
        console.log(playlists.filter( item => item._id===playlistId))
        const {videos} = playlists.filter( item => item._id===playlistId)[0]
        console.log(videos)
        return videos.some((item) => item._id === videoId )
    }

    return (
    <div className="playlist-popup">
        <p className='playlist-title'>Save to</p>
        <ul>
            {
                playlists!=[] && playlists.map( item => <li key={item._id} className="ul-no-style"><label><input type='checkbox' onClick={(e)=>checkBoxHandler(e, item._id, video)} checked={videoInPlaylist(item._id, video._id)}/>{item.title}</label></li>)
            }
        </ul>
        <input type='text' className='playlist-input' placeholder='Enter Playlist Name' value={playlistName} onInput={(e)=>setPlaylistName(e.target.value)} />
        <button className='playlist-button' onClick={()=>{
            addPlaylist(playlistName)
            setPlaylistName('')
        }}>Create Playlist</button>
    </div>
    )

}