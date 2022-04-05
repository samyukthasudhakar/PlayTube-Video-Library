import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useAuth } from 'context'

const playlistContext = createContext({})

function PlayListProvider ({ children }){

    const [playlists, setPlayLists] = useState([])
    const { authState: {token} } = useAuth()

    function checkIfPresent (name, state){
        return state.some(item => item === name)
    }

    const addPlaylist = async( item ) => {
        if(item==''){
            alert('Playlist name cannot be empty. Please give a valid name.')
        }else{
        if(!checkIfPresent(item, playlists.map(item => item.title))){
        try{
            const response = await axios.post("/api/user/playlists",
            {
                playlist: {title: item , description:"bar bar bar" }
                },
            {
                headers: {
                    authorization: token,   
                },
            }
            )
            setPlayLists(response.data.playlists);
        }
        catch(error){
            console.log(error)
        }
        }else{
            alert('Playlist with name already exists. Try a different name.')
        }}
    }

    const addToPlaylist = async( playlistId, video ) => {
        try{
            const response = await axios.post(`/api/user/playlists/${playlistId}`,
            {
                video    
            },
            {
                headers: {
                    authorization: token,   
                },
            }
            )
            setPlayLists(playlists.map(playlist => (
                playlist._id === response.data.playlist._id ?
                response.data.playlist
                : playlist
            )))
        }
        catch(error){
            console.log(error)
        }
    }

    const getFromPlaylist = async( playlistId ) => {
        try{
            const response = await axios.get(`/api/user/playlists/${playlistId}`,
            {
                headers: {
                    authorization: token,   
                },
            }
            )
        }
        catch(error){
            console.log(error)
        }
    }
    
    const deletePlaylist = async( playlistId ) => {
        try{
            const response = await axios.delete(`/api/user/playlists/${playlistId}`,
            {
                headers: {
                    authorization: token,   
                },
            }
            )
            setPlayLists(response.data.playlists)
        }
        catch(error){
            console.log(error)
        }
    }
    
    const deleteFromPlaylist = async( playlistId, videoId ) => {
        try{
            const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,
            {
                headers: {
                    authorization: token,   
                },
            }
            )
            setPlayLists(playlists.map(playlist => (
                playlist._id === response.data.playlist._id ?
                response.data.playlist
                : playlist
            )))
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <playlistContext.Provider value={{ playlists, addPlaylist, addToPlaylist, getFromPlaylist, deletePlaylist, deleteFromPlaylist }}>
            { children }
        </playlistContext.Provider>
    )
}

const usePlayList = () => useContext(playlistContext)

export { PlayListProvider, usePlayList }