import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom'
import { LikedVideosReducer } from 'reducers/likedVideosReducer';
import { useAuth } from './authContext'

const likedVideosContext = createContext(null);

function LikedVideosProvider( { children } ){

    const [ likedVideos, likedVideosDispatch ] = useReducer( LikedVideosReducer, [])
    const { authState:{ isLoggedIn } } = useAuth()
    const navigateTo = useNavigate()

    function likeToggle( video ){
        isLoggedIn ? likedVideosDispatch({type: 'LIKE_TOGGLE', payload: video})
        : navigateTo("/login")
    }

    return (
        <likedVideosContext.Provider value={{ likedVideos, likedVideosDispatch, likeToggle }}>
            { children }
        </likedVideosContext.Provider>
    )
}

const useLikedVideos = () => useContext(likedVideosContext)

export { LikedVideosProvider, useLikedVideos }
