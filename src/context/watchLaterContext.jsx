import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'context'
import { POST_WATCH_LATER, DELETE_WATCH_LATER } from 'utils/constants/apiEndPoints'
import checkIfPresent from 'utils/functions/checkIfPresent'

const watchLaterContext = createContext(null)

function WatchLaterProvider( { children } ){

    const [ watchLaterState, setWatchLater] = useState([])
    const { authState: {isLoggedIn, token} } = useAuth()
    const navigateTo = useNavigate()

    function addToWatchLater( item ){
        if (isLoggedIn && !checkIfPresent(item._id, watchLaterState)){
            axios.post(POST_WATCH_LATER,
                { video: item },
                {
                    headers: {
                        authorization: token,
                    },
                }
            ).then((response) => {
                setWatchLater(response.data.watchlater);
            }).catch((error) => {
                console.log(error)
            })
        }else{
            navigateTo('/login')
        }
    }
    
    function removeFromWatchLater( item ){
        if ( isLoggedIn ){
            axios.delete(`${DELETE_WATCH_LATER}${item._id}`,
                {
                    headers: {
                        authorization: token,
                    },
                }
            ).then((response) => {
                setWatchLater(response.data.watchlater);
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    function clearWatchLater(){
        if (isLoggedIn ){
            watchLaterState.map( video => removeFromWatchLater( video ))
        }
    }

    return (
        <watchLaterContext.Provider value={{ watchLaterState, addToWatchLater, removeFromWatchLater, clearWatchLater }}>
            { children }
        </watchLaterContext.Provider>
    )
}

const useWatchLater = () => useContext( watchLaterContext )

export { WatchLaterProvider, useWatchLater }