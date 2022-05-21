/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import Header from "../../components/Header";
import TagsBar from '../../components/TagsBar';
import DropDown from '../../components/DropDown';
import Profile from '../../components/Profile';
import RatingBar from '../../components/RatingBar';
import Footer from '../../components/Footer';
import './Accomodation.css';
import Carousel from '../../components/Carousel';

const Accomodation = () => {
    
    const pathname = window.location.pathname.split('/');
    const accomodationId = pathname[pathname.length - 1];
    const [data,setData]=useState([]);
    const navigate = useNavigate();

    const getData=()=>{
        fetch('../datas/accomodations.json')
        .then(response => response.json())
        .then(allData => {
            const result = allData.find(Data => Data.id === accomodationId)
            typeof result === 'undefined' ? navigate('/error404') : setData([result])
        })
        .catch(err => console.log('Error : ', err))
    };
    useEffect(()=>{
        getData();
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