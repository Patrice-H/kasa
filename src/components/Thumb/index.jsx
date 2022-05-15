import './Thumb.css';

const Thumb = ({title, cover}) => {

    return (
        <div className='accomodation-sheet'>
            <img src={ cover } alt='accomodation cover' className='accomodation-cover-img'/>
            <div className='accomodation-sheet-filter'></div>
            <p className='accomodation-title'>{ title }</p>
        </div>
    );
}

export default Thumb;