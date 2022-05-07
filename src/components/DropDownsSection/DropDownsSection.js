//import { useState } from 'react';
import { dropDownsList } from '../../datas/dropDownsList';
import DropDown from "../DropDown/DropDown";
import './DropDownsSection.css';

const DropDownsSection = () => {

    //const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='about-content'>
            <ul>
                {dropDownsList.map((dropDown) => (
                    <li key={ dropDown.id } className='drop-down'>
                        <DropDown 
                            name={ dropDown.name } 
                            content={ dropDown.content }
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default DropDownsSection;