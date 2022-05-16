import './TagsBar.css';

const TagsBar = ({tags}) => {
    return (
        <div className='tagsBar'>
            {tags.map((tag, index) => (
                <span key={`${tag}-${index}`}>{tag}</span>
            ))}
        </div>
    );
}

export default TagsBar;