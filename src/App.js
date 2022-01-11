import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CoffeeCard from './components/CoffeeCard';

function App() {

  const [data, setData] = useState([])

  let url = `https://api.sampleapis.com/coffee/hot`

  const getData = async () => {
    await axios.get(url)
      .then(res => {
        setData(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="p-5 bg-dark fs-1">
        <div className="text-light text-center"><b>COFFEE</b></div>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="m-3">MORE COFFEE</div>
      </div>

      <div className="container">
        {
          data.map(element => (
            < div key={element.id} >
              <CoffeeCard coffee={element} />
            </div>
          )
          )
        }
      </div>
    </div >

  )
}

export default App;
