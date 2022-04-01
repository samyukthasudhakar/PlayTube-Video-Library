import { useEffect } from 'react'

export default function useScrollToTop(){
    useEffect(()=>{
        window.scroll(0,0)
    })
}