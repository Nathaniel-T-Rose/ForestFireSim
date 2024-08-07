import React, { useState } from 'react'
import About from './About'
import Skills from './Skills'

import '../styles/profile.scss'

import cakePix from '../assets/cake.png'
import outsidePix from '../assets/outside.png'
import selfPix from '../assets/self.png'
import { useSearchParams } from 'react-router-dom'

const Profile = (props) => {
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const [page, setPage] = useState(searchParams.get('page'));
    return (
    <div className='profile'>
        <div className='col1'>
            <header className='intro'>
                <h3>Conceptual Engineer</h3>
                <h1>Nathaniel</h1>
                <hr />
                <h4>Starting Class: Software Developer</h4>
                <h4>PLACEHOLDER - GIT, LINKEDIN, ETC</h4>
            </header>
            <section className='info'>
                <ul className='page-options'>
                    <li 
                        className={page==='about'?'page-active':'page-inactive'}
                        onClick={()=>{setPage('about')}}
                    >
                        
                        About
                    </li>
                    <li 
                        className={page==='skills'?'page-active':'page-inactive'}
                        onClick={()=>{setPage('skills')}}
                    >
                        Skills
                    </li>
                </ul>
                <div className='content'>
                    {page==='about' ? <About /> : <Skills />}
                </div>
            </section>
        </div>
        <div className='col2'>
            <div className='img-container'>
                <img src={selfPix}></img>
            </div>
            <div className='img-container'>
                <img src={outsidePix}></img>
            </div>
            <div className='img-container'>
                <img src={cakePix}></img>
            </div>
        </div>
    </div>
  )
}

export default Profile

{/* GeneralPage structure
    
    moniker (italics)
    Name 
    line break
    Starting class: whatever

    Summary
    
    */}
