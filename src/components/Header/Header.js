/* eslint-disable no-undef */
import logo from '../../assets/general/logo.png';
import './Header.css';

const  Header = ({activePage, setActivePage}) => {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <nav className='menu'>
                <ul>
                    {
                        activePage === 'home' ? 
                        <li className='active-page' onClick={() => setActivePage('home')}>Accueil</li> : 
                        <li onClick={() => setActivePage('home')}>Accueil</li>
                    }
                    {
                        activePage === 'about' ? 
                        <li className='active-page' onClick={() => setActivePage('about')}>A Propos</li> : 
                        <li onClick={() => setActivePage('about')}>A Propos</li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;