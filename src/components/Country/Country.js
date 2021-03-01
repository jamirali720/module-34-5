import React from 'react';
import './Country.css';

const Country = (props) => {
   
    const { name, population, area, flag, capital, region, subregion, nativeName  } = props.country;
    const handleAddCountry =  props.handleAddCountry;
    return (
        <div style ={{width:'90%', margin: '20px', border:'2px solid green'}}>
           <h1>{name}</h1>
           <h1>{area}</h1>
           <h1>{population}</h1>
        <img style={{width : '150px'} }src={flag} alt=""/>
        <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;