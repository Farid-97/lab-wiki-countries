import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL='https://ih-countries-api.herokuapp.com/countries'

function CountriesList(){
    const[coutries, setCountries]=useState([]);
    
    const getCountries=async()=>{
        try {
            let response= await axios.get(apiURL)
            setCountries(response.data)
        } catch(error)  {
            console.log(error)
        }
    };

    useEffect(()=>{
        getCountries()
    },[]);

return (
    <div>
        <h1>List of Countries</h1>
        {coutries.map((pais)=>{
            return (
                <div key={pais.id} className='countries'>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${pais.alpha2Code.toLowerCase()}.png`} />
                <Link to={`/CountryDetails/${pais._id}`} >
            <p> {pais.name.common}</p>  
            </Link> 
                </div>
            )
        })}
    </div>
)

}

export default CountriesList