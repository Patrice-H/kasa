import './Profile.css';

/**
 * Component that returns the name and picture of the host
 * 
 * @component
 * @param {object} host - The accomodation host
 * @param {string} host.name - The host name
 * @param {string} host.picture - The host picture link
 * @returns A function that returns the component
 */
const Profile = ({host}) => {
    return (
        <div className='profile'>
            <p className='profile-name'>
                {host.name.split(' ')[0]}
                <br />
                {host.name.split(' ')[1]}
            </p>
            <p className='profile-picture'>
                <img src={host.picture} alt={host.name} />
            </p>
        </div>
    );
}

export default Profile;