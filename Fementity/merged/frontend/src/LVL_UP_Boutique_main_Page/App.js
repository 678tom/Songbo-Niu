import Showcase from './components/Showcase';
import Sidebar from './components/Sidebar';
import Header from './Header';
import Footer from './components/Footer';
import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import pic1 from '../home/img/group_photo_3';
import Iframe from 'react-iframe';
import CallToAction from '../home';
import {Link as RouteLink, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Section1Text1 = "LVLUP IS AN UPCYCLING & CONSIGNMENT BOUTIQUE WITH THE MISSION OG REDUCING CLOTHING WASTE BY FINDING NEW HOMES FOR CLOTHES FOR RECYCLING THEM INTO UNIQUE PIECES"

// const newpageLinkForSection1LEarnMore = lazy(() => import('../'));








function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="SideBar20">
          <Sidebar />
        </div>
        <div className="Showcases80">
          <div className="Showcasestop">
            <div className="showcase ">
              <Showcase />
            </div>
            <div className="showcase ">
              <Showcase />
            </div>
          </div>
          <div className="Showcasesbot">
            <div className="showcase ">
              <Showcase />
            </div>
            <div className="showcase ">
              <Showcase />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


      
