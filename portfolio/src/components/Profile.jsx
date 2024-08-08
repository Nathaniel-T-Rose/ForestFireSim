import React, { useState } from 'react'
import About from './About'
import Skills from './Skills'

import '../styles/profile.scss'

import cakePix from '../assets/cake.png'
import outsidePix from '../assets/outside.png'
import selfPix from '../assets/self.png'
import { useSearchParams } from 'react-router-dom'
import LinkBar from './LinkBar'

const Profile = (props) => {
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const [page, setPage] = useState(searchParams.get('page'));
    return (
    <div className='profile'>
        <div className='col1'>
            <header className='intro'>
                <h3>A Conceptual Engineer</h3>
                <h1>Nathaniel</h1>
                <hr />
                <h4>Starting Class: Software Developer</h4>
                <LinkBar />
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
            <div className='img-container img1'>
                <img src={selfPix} />
            </div>
            <div className='img-container img2'>
                <img src={outsidePix} />
            </div>
            <div className='img-container img3'>
                <img src={cakePix} />
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
