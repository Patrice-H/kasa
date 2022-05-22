import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './DropDown.css';

/**
 * Component that returns a explanation drop down with a open/close button
 * 
 * @component
 * @param {string} name - The name of drop down
 * @param {string} content - the content of drop down
 * @returns A function that returns the component
 */
const DropDown = ({name, content}) => {

    let ddContentsClass = 'drop-down-contents';
    const [isOpen, setIsOpen] = useState(false);
    if (!isOpen) ddContentsClass += ' hidden';

    return (
        <div className='drop-down'>
            <div className='drop-down-header'>
                <p className='drop-down-name'>{ name }</p>
                <p className='drop-down-btn' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <FontAwesomeIcon icon={ faChevronUp } />
                ) : (
                    <FontAwesomeIcon icon={ faChevronDown } />
                )}
                </p>
            </div>
            <div className={ ddContentsClass }>
                <ul className='container'>
                {content.map((line, index) => (
                    <li key={`${line}-${index}`}>{line}</li>
                )) }
                </ul>
            </div>
        </div>
    );
}

export default DropDown;