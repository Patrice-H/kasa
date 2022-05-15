import React,{useState,useEffect} from 'react';
import Header from '../../components/Header';
import Banner from "../../components/Banner";
import Thumb from '../../components/Thumb';
import Footer from '../../components/Footer';
import './Home.css';

const Home = () => {
    const activePage = 'home';
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('./datas/accomodations.json')
        .then(response => response.json())
        .then(allData => setData(allData))
        .catch(err => console.log('Error : ', err))
    };
    useEffect(()=>{
        getData()
    },[]);

    return (
        <>
            <Header activePage={activePage} />
            <Banner activePage={activePage} />
            <section className='gallery'>
                <ul>
                    {data && data.length>0 && data.map((accomodation) => (
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