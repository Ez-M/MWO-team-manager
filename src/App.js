import './App.css';

import './css/myStyles.css';

import React, {useState} from "react";

import Main from "./components/main";

// function App() {
//   return (
//     <div className="App">
//       <Main/>
//     </div>
//   );
// }

function App() {

  const [returnedData, setReturnedData] = useState(['Hello!']);




  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'Application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData)
    console.log(returnedData);
    
  };




  return(
    <div className="App">
      <button onClick={()=> getData('/getUsers')}>Click</button>
    </div>
  )
};

export default App;
