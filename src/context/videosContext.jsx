import { createContext, useContext, useReducer } from "react"
import { VideosReducer } from "reducers/videosReducer"
import { useAsyncServerCall } from "hooks/useAsyncServerCall"
import { GET_CATEGORIES, GET_VIDEOS } from "utils/constants/apiEndPoints"

const videosContext = createContext(null);

function VideosProvider({ children }){

    const [data, videosDispatch] = useReducer(VideosReducer,{
        videos: [],
        categories: [],
        categoryFilter: 'All',
    })
    
    function getFilteredData(category, videos){
        if(category==='All'){
            return [...videos]
        }
        return videos.filter(video => video.category===category)
    }

    useAsyncServerCall(GET_CATEGORIES, videosDispatch, 'GET_CATEGORIES')
    useAsyncServerCall(GET_VIDEOS, videosDispatch, 'GET_VIDEOS')
    
    return(
        <videosContext.Provider value={{data, videosDispatch, getFilteredData}}>
            {children}
        </videosContext.Provider>
    )

}

const useVideos = () => useContext(videosContext)

export {VideosProvider, useVideos}