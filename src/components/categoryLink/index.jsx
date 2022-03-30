import { useVideos } from 'context'
import './categoryLink.css'

export function CategoryLink( {name}){
    const { data:{categoryFilter}, videosDispatch } = useVideos()

    return(
        <p className={categoryFilter===name?'active-category-link':'category-link'} onClick={()=>videosDispatch({type:'SET_CATEGORY_FILTER',payload:name})}>{name}</p>
    )
}