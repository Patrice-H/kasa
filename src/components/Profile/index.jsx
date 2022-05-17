import './Profile.css';

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