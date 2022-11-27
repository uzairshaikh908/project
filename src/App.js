import React, {useEffect, useState } from 'react'
import "./App.css";

function App() {
  const [data, setdata] = useState('');
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => 
    response.json()).then(setdata);
    
  },[setdata]);
  console.log(data);
  return(
    <div className="App">
      <h1 className="text">Displaying Data in json Format</h1>

   <pre className="text">{JSON.stringify(data, null, 2)}</pre>
 
    </div>
  )
}

export default App;
