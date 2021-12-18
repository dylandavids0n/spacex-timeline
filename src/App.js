import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [flightNumber, setFlight]  = useState(0);
  
  async function getAPI(){
    let response = await fetch('https://api.spacexdata.com/v4/launches/latest');
    let json = await response.json();
    console.log(json.flight_number);
    setFlight(json.flight_number);
  }

  useEffect(() => {
   getAPI(); 
  }, []);

  return (
    <div className="App">
      <h1>Flight Number: {flightNumber}</h1>
    </div>
  );
}

export default App;
