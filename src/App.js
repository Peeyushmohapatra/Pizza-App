import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import Maincontainer from './Components/Maincontainer/Maincontainer';
import { Route,Routes } from 'react-router-dom';
import Productdetails from './Components/Productdetails/Productdetails';
import Quickdetail from './Components/Quickdetail/Quickdetail';
import Orderpage from './Components/Orderpage/Orderpage';
import Success from './Components/Success/Success';

function App() {

  const dispatch = useDispatch()

  
  const url = "https://pizzaallapala.p.rapidapi.com/productos";
  const options = {
    method: "GET",

    headers: {
      "X-RapidAPI-Key": "c6f0929775msha7106aba1478c1bp1c17d0jsn9a24304cb53a",
      "X-RapidAPI-Host": "pizzaallapala.p.rapidapi.com",
    },
  };

  const fetchdata = async () => {
    const data = await fetch(url, options);
    const newdata = await data.json();
    dispatch({
      type:"items",
      payload:newdata.productos
    })
  };

  useEffect(() => {
    fetchdata()
  },[]);

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Maincontainer/>} />
        <Route path='/home' element={<Maincontainer/>} />
        <Route path='/productdetalis' element={<Productdetails/>} />
        <Route path='/order' element={<Orderpage/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/quickdetail' element={<Quickdetail/>} />
      </Routes>
    </div>
  );
}

export default App;
