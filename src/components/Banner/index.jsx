import homeBannerImg from '../../assets/general/home.jpg';
import aboutBannerImg from '../../assets/general/about.jpg';
import './Banner.css';

const Banner = ({activePage}) => {
    let bannerClasses = 'banner';
    
    if (activePage === 'home') {
        bannerClasses += ' home-page';
    } else {
        bannerClasses += ' about-page';
    }

    return (
        <div className={ bannerClasses }>
            <div className='banner-filter'></div>
            {
                activePage === 'home' ?
                <>
                <p className='slogan'>
                    <span>Chez vous, </span>
                    <span>partout et ailleurs</span>
                </p>
                <img src={homeBannerImg} alt='Home page banner' className='home' />
                </>: 
                <img src={aboutBannerImg} alt='About page banner' className='about' />
            }
        </div>
    );
}

export default Banner;