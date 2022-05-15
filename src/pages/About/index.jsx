import Header from "../../components/Header";
import Banner from "../../components/Banner";
import DropDown from "../../components/DropDown";
import Footer from "../../components/Footer";
import { dropDownsList } from '../../datas/dropDownsList';
import './About.css';

const About = () => {
    const activePage = 'about';

    return (
        <>
            <Header activePage={activePage} />
            <Banner activePage={activePage} />
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
            <Footer />
        </>
    );
}

export default About;