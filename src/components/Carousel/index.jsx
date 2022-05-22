import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Carousel.css';

/**
 * Component that returns a images gallery with two scrollable buttons
 * 
 * @component
 * @param {string[]} pictures - The array of picture links
 * @returns A function that returns the component
 */
const Carousel = ({pictures}) => {

    const [pictureNumber, setPictureNumber] = useState(0);
    let imgSrc = pictures[pictureNumber];
    let displayedPicture = `${pictureNumber + 1}/${pictures.length}`;

    const nextImage = () => {
        pictureNumber + 1 === pictures.length ? 
        setPictureNumber(0) : 
        setPictureNumber(pictureNumber + 1)
    };
    const previousImage = () => {
        pictureNumber === 0 ?
        setPictureNumber(pictures.length -1) :
        setPictureNumber(pictureNumber - 1)
    };

    return (
        <div className='carousel'>
            <img src={imgSrc} alt='vue du logement' />
            {pictures.length > 1 ? (
                <>
                    <span className='btn-previous' onClick={previousImage}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                    <span className='btn-next' onClick={nextImage}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </>
            ) : (
                null
            )}
            <span className='displayed-picture'>{displayedPicture}</span>
        </div>
    );
}

export default Carousel;