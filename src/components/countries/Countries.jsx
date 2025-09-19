import React, { useState } from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './contries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitorCountryFlag, setVisitorCountryFlag] = useState([]);
    const handleCountryFlag = (flag) => {
        const newVisitorFlag = [...visitorCountryFlag, flag]
        setVisitorCountryFlag(newVisitorFlag)

    }

    const handleVisitedCountries = (country) => {
        // console.log("visited country clicked", country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)

    return (
        <div>
            <h1>In the countries{countries.length}</h1>
            <h1>Total Country Visited:{visitedCountries.length}</h1>
            <h1>Total Flags Visited:{visitorCountryFlag.length}</h1>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitorCountryFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleCountryFlag={handleCountryFlag} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;