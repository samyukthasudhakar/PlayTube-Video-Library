import { Header, SideNavBar, VideoCard, CategoryLink } from 'components'
import { useVideos } from 'context'

import './home.css'

function HomePage(){
    const {data:{videos, categories, categoryFilter}, getFilteredData} = useVideos()
    const filteredData  = getFilteredData(categoryFilter, videos)
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='flex-column video-listing' >
                    <div className='flex-layout categories-container'>
                    {
                        categories.map(({_id, category}) => <CategoryLink key={_id} name={category} />)
                    }
                    </div>
                    <div className='flex-layout flex-wrap '>
                    {
                        filteredData.map(video => <VideoCard key={video._id} video={video}/>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HomePage }