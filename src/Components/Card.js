import location_icon from '../location_icon.svg'
import '../styles/card.css'

export function Card(props) {
    return(
        <div className='card'>
            <img className='location_img' src={props.image} alt={props.title} />
            <div className='cardDetails'>
                <div className='firstLine'>
                    <img src={location_icon} alt='location icon' />
                    <p className='location'>{props.location}</p>
                    <a href={props.url}>View on Google Maps</a>
                </div>
                <p className='title'>{props.title}</p>
                <br />
                <p className='date'>{props.startDate}-{props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}