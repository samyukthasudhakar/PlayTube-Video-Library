import { Link } from 'react-router-dom'
import './videoReco.css'

export function VideoRecommendationCard({video}){
    const { _id, thumbnail, title, creator, views, likes} = video
    return(
        <Link to={`/watch/:${_id}`}>
            <div className="flex-layout reco-parent" >
                <img className="reco-image" src={thumbnail} />
                <div className="flex-column flex-start">
                    <p className="reco-title">{title}</p>
                    <p className="reco-details">{creator}</p>
                    <p className="reco-details">{`${views} views • ${likes} likes`}</p>
                </div>
            </div>
        </Link>
        
    )
}