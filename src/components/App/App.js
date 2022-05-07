import { useState } from 'react'
import Banner from '../Banner/Banner';
import DropDownsSection from '../DropDownsSection/DropDownsSection';
//import DropDown from '../DropDown/DropDown';
import Header from '../Header/Header';
import './App.css';

const App = () => {

  const [activePage, setActivePage] = useState('other');

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' || activePage === 'about' ? <Banner activePage={activePage} /> : null}
      <DropDownsSection />
    </>
  );
}

export default App;
