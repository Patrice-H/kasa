import { Link } from 'react-router-dom';
import './Error.css';

/**
 * Component that returns an error text and a link to return to home page
 * 
 * @component
 * @returns A function that returns the component
 */
const Error = () => {
    return (
        <section className='error404'>
            <p className='big-number'>404</p>
            <p className='text'>Oups! La page que vous demandez n'existe pas.</p>
            <p className='backlink'>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </p>
        </section>
    );
}

export default Error;