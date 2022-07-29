import React, {useState, useContext} from "react";

function MainBody()
{

    const [returnedData, setReturnedData] = useState("");



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
        console.log(data)   
        setReturnedData(JSON.stringify(data));
              
      })
      // console.log(newData);
      // setReturnedData(newData);
      
      
    };

    const testParam = 1; 

    return(
    <React.Fragment>
        <div className="mainBody"> {returnedData} 
        
        <div>
      <button onClick={()=> getData('/users')}>Click</button>
    </div>

    <div>
      <button onClick={()=> getData(`/user/` + testParam)}>Click</button>
    </div>


        <div>
      <button onClick={()=> getData('/teams')}>Click</button>
    </div>

    <div>
      <button onClick={()=> getData(`/team/` + testParam)}>Click</button>
    </div>
        </div> 
    </React.Fragment>
    );
};

export default MainBody;