import './App.css';

import './css/myStyles.css';

import React, {useEffect, useState} from "react";

import Main from "./components/main";

import {BroswerRouter, Routes, Route, BrowserRouter } from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <Main/>
//     </div>
//   );
// }

function App() {

 

  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Main />}/>
    {/* <Route path='user' element = {<User />}/> */}
    {/* <Route path='teams' element = {<Teams />}/> */}
      {/* <Route path=':teamId' element = {<Team />}/> */}
    {/* <Route path='user' element = {<User />}/> */}  
    </Routes>
    </BrowserRouter>
    /*  
    Home
      header
        navbar
          navbutton(S)
          Sign-in < username & password form
            sign up <username, email, password, veryify password
                          if (username && email && password && password == verifyPassword ) { run password via bcrypt, submit new username, email, and bcrypt result}

      Body 
        card "A tool to help manage your MWO comp team. Free of charge, I was bored"
          "Start now" <button to log-in page
      Footer
        contact, stuff


      User-Page
        header
          navbar
            navbutton(s)
        Body
          Side-Nav
            0 player information
            1 profile settings
            2 user details
    


    */
  )
};

export default App;
