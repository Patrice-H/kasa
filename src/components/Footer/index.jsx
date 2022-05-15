import logoFooter from '../../assets/general/logo-footer.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <img src={ logoFooter } alt='logo-white' />
            <p>
                <FontAwesomeIcon icon={ faCopyright } />
                &nbsp;
                2020 Kasa. All rights reserved
            </p>
        </footer>
    );
}

export default Footer;