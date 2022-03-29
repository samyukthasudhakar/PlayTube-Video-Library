import './notSignedIn.css'

export function NotSignedIn ( { icon, name, tagline } ){
    return (
        <div className='flex-column flex-center section-container'>
            <img className="section-img" src={icon} />
            <p className="section-tagline">{tagline}</p>
            <p>{`${name} isn't viewable when logged out`}</p>
            <button className='cta-btn mg-tb-1'>Login</button>
        </div>
    )
}