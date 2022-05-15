import './Error.css';

const Error = () => {
    return (
        <section className='error404'>
            <p className='big-number'>404</p>
            <p className='text'>Oups! La page que vous demandez n'existe pas.</p>
            <p className='backlink'>Retourner sur la page d’accueil</p>
        </section>
    );
}

export default Error;