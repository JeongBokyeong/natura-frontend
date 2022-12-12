import { useState } from 'react'

import AppStyle from './App.module.css';

import Header from './components/Header';
import Contents from './components/Contents';
import Donation  from './donations/donationMain';
import AboutUs from './aboutus/AboutusMain';
import AllCategories from './allCategories/categoryMain';
import AdoptMain from './adopt/adopMain';
import Community from './community/communityMain';
import Chat from './chat/chatMain';
import Kokatoo from './adoptionPosts/kokatoo';
import NaturaHouse from './adoptionPosts/NaturaHouse'
// import {RemoveScroll} from 'react-remove-scroll';

import { BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    // <RemoveScroll>  
    <BrowserRouter>
      <div className={AppStyle.wrapper}>
        {/* dont display header when page is tutorial */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Header />} /> */}
          {/* <Route path="/tutorial" element={<></>} /> */}
        {/* </Routes> */}
        
        {/* <Header/> */}
        {/* < img src={Banner} alt="banner" className={AppStyle.Banner} /> */}
          
        <Routes>
          <Route path="/" element={<div><Header/><Contents/></div>} />
          <Route path='/donation' element={<Donation/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/allCategories' element={<AllCategories/>}/>
          <Route path='/adopt' element={<div><Header /><AdoptMain/></div>}/>
          <Route path='/community' element={<div><Header /><Community/></div>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/adopt/kokatoo' element={<Kokatoo/>}/>
          {/* <Route path='/allCategories' />/ */}
          <Route path='/adopt/kokatoo/NaturaHouse' element={<div><Header /><NaturaHouse/></div>} />
          <Route path='/adopt/kokatoo/NotYet' element={<div><Header /><NaturaHouse/></div>} />
          {/* <Route path ='/login' element={<div><Login/></div>}/> */}
          {/* <Route path='/tutorial' element={<Tutorial/>} /> */}
          {/* <Route path='/tutorial/result' element={<SearchResult/>} /> */}
          {/* <Route path='/tutorial/result/NaturaHouse' element={<TutorialNaturaHouse/>} /> */}
          {/* <Route path='/tutorial/result/NaturaHouse/TutorialChat' element={<TutorialChat/>} /> */}
          {/* <Route path='/tutorial/result/NaturaHouse/TutorialChat/ChatBot' element={<TutorialChatBot/>} /> */}
        </Routes>

      </div>
    </BrowserRouter>
    // <RemoveScroll/>  
  )
}

export default App
