import { Link } from 'react-router-dom';
import logo from '../../assets/general/logo.png';
import './Header.css';

const  Header = ({activePage}) => {

    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <nav className='menu'>
                {activePage === 'home' ? <Link to='/' className='active-page'>Accueil</Link> : <Link to='/'>Accueil</Link>}
                {activePage === 'about' ? <Link to='/about' className='active-page'>A propos</Link> : <Link to='/about'>A propos</Link>}
            </nav>
        </header>
    );
}

export default Header;