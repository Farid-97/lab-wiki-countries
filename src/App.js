import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './componets/Header'
import CountriesList from './componets/CountriesList';
const apiURL= 'https://ih-countries-api.herokuapp.com/countries'




function App() {
  return (
    <div className="App">
    <Header/>
    <CountriesList/>
    </div>
  );
}

export default App;
