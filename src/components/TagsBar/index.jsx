import './TagsBar.css';

/**
 * Component that returns a tags bar based on a array
 * 
 * @component
 * @param {string[]} tags - The array of tags
 * @returns A function that returns the component
 */
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