import { useState } from 'react'
import Header from '../Header/Header';
import './App.css';

const App = () => {

  const [activePage, setActivePage] = useState('other');

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
    </>
  );
}

export default App;
