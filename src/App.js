import './App.css';

import './css/myStyles.css';

import React, {useEffect, useState} from "react";

import Main from "./components/main";

// function App() {
//   return (
//     <div className="App">
//       <Main/>
//     </div>
//   );
// }

function App() {

  const [returnedData, setReturnedData] = useState([]);




  const getData = async (url) => {

    // if(params){
    //   for(let X in params)
    //   {
    //     url.searchParams.append(X, params[X])
    //   }
    // }

    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'Application/json'
      }
    })
    // .then(res => res.json());
    .then((response)=> {

      let potato = response.json()

      
     return potato;

    })
    .then((data) =>{
      for (const key in data){
        data.push("kek");
      };
      
      console.log(data)
    })
    // console.log(newData);
    // setReturnedData(newData);
    
    
  };
  
  const testParam = 1; 

  return(
    <React.Fragment>
    <div className="App">
      <button onClick={()=> getData('/getAllUsers')}>Click</button>
    </div>

    <div className="App">
      <button onClick={()=> getData(`/getUser/` + testParam)}>Click</button>
    </div>
    </React.Fragment>
  )
};

export default App;
