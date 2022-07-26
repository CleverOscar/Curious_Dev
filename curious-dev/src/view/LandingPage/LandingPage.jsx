import React from 'react';
import Header from '../LandingPage/Header/Header'
import OpenSource from './SubViews/OpenSource';
import Footer from '../Footer/Footer';

export default function LandingPage(){
    return(
        <div className="flex flex-col h-screen justify-evenly lg:container">
            <Header />
            
            <OpenSource />
        </div>
    )
}