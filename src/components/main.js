import React, {useState, useContext, Component} from "react";

import {MainHeader, MainFooter, MainBody} from "../components/componentList";


function Main()
{
    return(
        <React.Fragment>
    <MainHeader/>
    <MainBody/>
    <MainFooter/>
    </React.Fragment>
    );
};

export default Main;