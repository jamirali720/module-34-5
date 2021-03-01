import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then (res => res.json())
    .then (data => {setCountries(data)
  
    })
    .catch(error => alert(error))
    
    
  }, [])
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
      setCart (newCart);
  }
  return (
    <div className="App">
     <h1>Countries of the Wor : {countries.length}</h1>
     <h1> Selected Country : {cart.length}</h1>
      <Cart cart ={cart}> </Cart>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key ={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
