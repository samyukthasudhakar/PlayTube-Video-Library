import { Header, SideNavBar, VideoCard, CategoryLink } from 'components'
import './home.css'

function HomePage(){
    const categories = ["All", "Movies", "Music", "Comedy", "Documentaries"]
    return (
        <div>
            <Header />
            <div className="flex-layout">
                <SideNavBar /> 
                <div className='flex-column video-listing' >
                    <div className='flex-layout categories-container'>
                    {
                        categories.map(category => <CategoryLink name={category} />)
                    }
                    </div>
                    <div className='flex-layout flex-wrap '>
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HomePage }