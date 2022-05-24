import React,{useState,useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Header from "../../components/Header";
import Carousel from '../../components/Carousel';
import TagsBar from '../../components/TagsBar';
import DropDown from '../../components/DropDown';
import Profile from '../../components/Profile';
import RatingBar from '../../components/RatingBar';
import Footer from '../../components/Footer';
import './Accomodation.css';

/**
 * Component that assembles multiple components and returns the accomodation page
 * 
 * @component
 * @see {@link Header}
 * @see {@link Carousel}
 * @see {@link TagsBar}
 * @see {@link Profile}
 * @see {@link RatingBar}
 * @see {@link DropDown}
 * @see {@link Footer}
 * @returns A function that returns the page
 */
const Accomodation = () => {
    
    const { accomodationId } = useParams();
    const [data,setData] = useState([]);
    const navigate = useNavigate();

    const getData=()=>{
        fetch('./datas/accomodations.json')
        .then(response => response.json())
        .then(allData => {
            const result = allData.find(Data => Data.id === accomodationId )
            typeof result === 'undefined' ? navigate('/error404') : setData([result])
        })
        .catch(err => console.log('Error : ', err))
    };

    useEffect(()=>{
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            {data && data.length>0 && data.map((accomodation) => (
                <section key={accomodation.id} className='accomodation'>
                    <Carousel pictures={accomodation.pictures}/>
                    <h1>{accomodation.title}</h1>
                    <p className='location'>{accomodation.location}</p>
                    <TagsBar tags={accomodation.tags}/>
                    <div className='informations'>
                        <Profile host={accomodation.host} />
                        <RatingBar rating={accomodation.rating} />
                    </div>
                    <div className='content'>
                        <DropDown name='Description' content={[accomodation.description]} />
                        <DropDown name='Équipements' content={accomodation.equipments} />
                    </div>
                </section>  
            ))}
            <Footer />
        </>
    );
}

export default Accomodation;