import React, {useState, useContext, Component} from "react";

import {MainHeader, MainFooter, MainBody} from "../components/componentList";


function Home()
{
    return(
        <React.Fragment>
    <MainHeader/>
    <MainBody/>
    <MainFooter/>
    </React.Fragment>
    );
};

export default Home;