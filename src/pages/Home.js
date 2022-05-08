import Header from '../components/Header/Header';
import Banner from "../components/Banner/Banner";
import Thumb from '../components/Thumb/Thumb';
import Footer from '../components/Footer/Footer';
import { accomodations } from '../datas/accomodations';
import './Home.css';

/*
let titles = [];
fetch('../datas/accomodations.json')
.then(response => response.json())
.then(datas => datas.forEach(data => titles.push(data.title)))
.catch(err => console.log('Error : ', err))

fetch('../datas/accomodations.json')
    .then(async response => {
        //data = await response.json();
    })
*/
const Home = ({activePage, setActivePage}) => {

    return (
        <>
            <Header activePage={activePage} setActivePage={setActivePage} />
            <Banner activePage={activePage} />
            <section className='gallery'>
                <ul>
                    {accomodations.map((accomodation) => (
                        <li key={ accomodation.id }>
                            <Thumb 
                                title={ accomodation.title } 
                                cover={ accomodation.cover }
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <Footer />
        </>
    );
}

export default Home;