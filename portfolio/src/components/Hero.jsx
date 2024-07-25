import React from 'react'
import {WizardCanvas} from '.';

import '../styles/hero.scss';

const Hero = ({scrollContainer}) => {
  return (
    <div className='section'>
      <div id='hero' className='header' >
        <div className='header_content'>
          <div className='header_green'>
          <div className="header_name ">
              <h1 className='glitch' data-text='Nathaniel Rose'>
                Nathaniel Rose 
              </h1>
              <p className='glitch' data-text='Software Developer'>Software Developer</p>
          </div>
            <img src='src/assets/background.png' alt='' className='header_background' 
            />
            <div className='header_cat'>
              <WizardCanvas scrollContainer={scrollContainer} />
            </div>
          </div>
          <div className='header_box'>
            <img src='src/assets/textbox.png' alt=''  className='header_background'/>
            <div className='header_text'>
              <span className='glitch' data-text='Nathaniel:'>
              <b>{`Nathaniel: ${' '}`}</b>
              </span>
              <span className='typewriter'>
                Hey there! I'm a full-stack software developer and nostalgia connoisseur with a keen interest in all things web dev.     
              </span>
            </div>
            <div className='header_nav'>
              <div><i class="arrow right"></i>Projects</div>
              <div><i class="arrow right"></i>Experience</div>
              <div><i class="arrow right"></i>Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
