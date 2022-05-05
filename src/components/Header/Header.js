/* eslint-disable no-undef */
import logo from '../../assets/general/logo.png';
import './Header.css';

const  Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <nav className='menu'>
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;