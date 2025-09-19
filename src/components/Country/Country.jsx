import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountries, handleCountryFlag }) => {
    // console.log(handleVisitedCountries)
    const [visited, setVisited] = useState(false);
    // console.log(country.area.area)
    const handleVisited = () => {
        // if (visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true)
        // }
        // another 2nd
        setVisited(visited ? false : true)
        // third system 
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h4>Name:{country.name.common}</h4>
            <p>Population:{country.population.population}</p>
            <p>{country.area.area} {country.area.area > 30000 ? "big country" : "small country"}</p>
            <button onClick={handleVisited}>{visited ? "visited" : "not visited"}</button>
            <button onClick={() => { handleCountryFlag(country.flags?.flags?.png) }}>Add visited Flag</button>
        </div>
    );
};

export default Country;