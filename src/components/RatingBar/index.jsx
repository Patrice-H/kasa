import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './RatingBar.css';

const RatingBar = ({rating}) => {

    const nbRate = parseInt(rating);
    let positiveRate = [];
    let negativeRate = [];

    for (let i = 0; i < nbRate; i++) {
        positiveRate.push(<span key={`star-on-${i}`} className='star-on'><FontAwesomeIcon icon={faStar} /></span>);   
    }
    for (let i = 0; i < 5 - nbRate; i++) {
        negativeRate.push(<span key={`star-off-${i}`} className='star-off'><FontAwesomeIcon icon={faStar} /></span>);   
    }

    return (
        <div className="rating">
            {positiveRate}
            {negativeRate}
        </div>
    );
}

export default RatingBar;