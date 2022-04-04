import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useAuth } from 'context'
import { POST_HISTORY } from 'utils/constants/apiEndPoints'
import checkIfPresent from 'utils/functions/checkIfPresent'

const historyContext = createContext(null)

function HistoryProvider( { children } ){

    const [ historyState, setHistory] = useState([])

    const { authState: {isLoggedIn, token} } = useAuth()

    const addToHistory = async( item ) => {
        if (isLoggedIn && !checkIfPresent(item._id, historyState)){
            try{
                const response = await axios.post(POST_HISTORY,
                    { video: item },
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                )
                setHistory(response.data.history);
            }
            catch(error){
                console.log(error)
            }
        }
    }

    const clearHistory = () => {
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