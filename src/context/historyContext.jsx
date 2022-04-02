import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useAuth } from 'context'
import { POST_HISTORY } from 'utils/constants/apiEndPoints'
import checkIfPresent from 'utils/functions/checkIfPresent'

const historyContext = createContext(null)

function HistoryProvider( { children } ){

    const [ historyState, setHistory] = useState([])

    const { authState: {isLoggedIn, token} } = useAuth()

    function addToHistory( item ){
        if (isLoggedIn && !checkIfPresent(item._id, historyState)){
            axios.post(POST_HISTORY,
                { video: item },
                {
                    headers: {
                        authorization: token,
                    },
                }
            ).then((response) => {
                setHistory(response.data.history);
                console.log(historyState)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    function clearHistory(){
        isLoggedIn && setHistory([])
    }

    

    return (
        <historyContext.Provider value={{ historyState, addToHistory, clearHistory }}>
            { children }
        </historyContext.Provider>
    )
}

const useHistory = () => useContext( historyContext )

export { HistoryProvider, useHistory }