import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'context'
import checkIfPresent from 'utils/functions/checkIfPresent'

const watchLaterContext = createContext(null)

function WatchLaterProvider( { children } ){

    const [ watchLaterState, setWatchLater] = useState([])
    const { authState: {isLoggedIn, token} } = useAuth()
    const navigateTo = useNavigate()

    function addToWatchLater( item ){
        isLoggedIn ?
        !checkIfPresent(item._id, watchLaterState) && setWatchLater([...watchLaterState, item]) 
        : navigateTo('/login')
    }
    
    function removeFromWatchLater( item ){
        setWatchLater(watchLaterState.filter(video => video._id != item._id))
    }

    function clearWatchLater(){
        isLoggedIn && setWatchLater([])
    }

    

    return (
        <watchLaterContext.Provider value={{ watchLaterState, addToWatchLater, removeFromWatchLater, clearWatchLater }}>
            { children }
        </watchLaterContext.Provider>
    )
}

const useWatchLater = () => useContext( watchLaterContext )

export { WatchLaterProvider, useWatchLater }