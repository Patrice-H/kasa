import { Link } from 'react-router-dom';
import './Thumb.css';

/**
 * Component that returns the title and cover picture of a accomodation in a link
 * 
 * @component
 * @param {object} accomodation - The accomodation data
 * @param {string} accomodation.cover - The accomodation cover picture link
 * @param {string} accomodation.title - The accomodation title
 * @returns A function that returns the component
 */
const Thumb = ({accomodation}) => {

    const pageLink = `/accomodation/${accomodation.id}`;

    return (
        <Link to={pageLink} className='accomodation-sheet'>
            <img src={ accomodation.cover } 
                alt='accomodation cover' 
                className='accomodation-cover-img'
            />
            <div className='accomodation-sheet-filter'></div>
            <p className='accomodation-title'>{ accomodation.title }</p>
        </Link>
    );
}

export default Thumb;