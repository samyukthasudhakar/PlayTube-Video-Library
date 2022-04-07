import { useEffect } from "react";
import axios from 'axios'

export function useAsyncServerCall(api_path, dispatch, actionType){
    useEffect(()=>{
        (async() => {
            try{
                const response = await axios.get(api_path)
                const dataName = actionType.split('_')[1].toLowerCase()
                dispatch({type: actionType, payload: response.data[dataName]})
            }
            catch (error){
                console.log(error)
            }
        })()
    },[])
}