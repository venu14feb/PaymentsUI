import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/PaymentsUI/Menu';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import SongList from './components/SongList';
import SearchOrder from './components/PaymentsUI/Search';

function App() {
  return (
    <div>
      <Menu/>
      <SearchOrder orderId={10}/>
    </div>
  );
}

export default App;
