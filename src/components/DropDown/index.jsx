import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './DropDown.css';

const DropDown = ({name, content}) => {

    let ddContentsClass = 'drop-down-contents hidden';
    const [isOpen, setIsOpen] = useState(false);
    
    if (isOpen) {
        ddContentsClass = 'drop-down-contents';
    } else {
        ddContentsClass = 'drop-down-contents hidden';
    }

    return (
        <>
            <div className='drop-down-header'>
                <p className='drop-down-name'>{ name }</p>
                {
                    isOpen ?
                    <p className='drop-down-btn' onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={ faChevronUp } />
                    </p> :
                    <p className='drop-down-btn' onClick={() => setIsOpen(true)}>
                        <FontAwesomeIcon icon={ faChevronDown } />
                    </p>
                }  
            </div>
            <div className={ ddContentsClass }>{ content }</div>
        </>
    );
}

export default DropDown;