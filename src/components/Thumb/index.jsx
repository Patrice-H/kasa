import { Link } from 'react-router-dom';
import './Thumb.css';

const Thumb = ({accomodation}) => {

    const pageLink = `/accomodation/${accomodation.id}`;

    return (
        <Link to={pageLink} className='accomodation-sheet'>
            <img src={ accomodation.cover } alt='accomodation cover' className='accomodation-cover-img'/>
            <div className='accomodation-sheet-filter'></div>
            <p className='accomodation-title'>{ accomodation.title }</p>
        </Link>
    );
}

export default Thumb;