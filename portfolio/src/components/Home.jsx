import { useState,useEffect } from 'react'
import {WizardCanvas} from '.';

import '../styles/hero.scss';
import hillsImg from '../assets/background.png';
import textboxImg from '../assets/textbox.png';
const Home = ({scrollContainer}) => {

  const [selection,setSelection] = useState(0);
  const [inFocus, setInFocus] = useState(false);
  const selections = ['Portfolio', 'Experience', 'About', 'Contact'];

  const handleIncrement = () => {
    if(selection<selections.length-1){
      setSelection(selection+1)
    }
  };
  const handleDecrement = () => {
    if(selection>0){
      setSelection(selection-1)
    }
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if( e.key === 'ArrowRight' ){
      handleIncrement();
    } else if ( e.key === 'ArrowLeft' ){
      handleDecrement();
    }
  }

  useEffect( () => {
    window.addEventListener('keydown',handleKeyPress);
    return () => {
      window.removeEventListener('keydown',handleKeyPress);
    }
    },[handleKeyPress]);


  return (
    <div className='section'>
      <div id='home' className='header' >
        <div className='header_content'>
          <div className='header_green'>
            <div className="header_name "
              onMouseEnter = {() => setInFocus(!inFocus)}
            >
              <h1 className={inFocus ? 'glitch': ''} data-text='Nathaniel Rose'>
                Nathaniel Rose 
              </h1>
              <p className={inFocus ? 'glitch': ''} data-text='Software Developer'>Software Developer</p>
            </div>
            <img src={hillsImg} alt='' className='header_background_hills' 
            />
            <div className='header_cat'>
              <WizardCanvas scrollContainer={scrollContainer} />
            </div>
          </div>
          <div className='header_box'>
            <img src={textboxImg} alt=''  className='header_background_box'/>
            <div className='header_text'>
              <span className='glitch' data-text='Nathaniel:'>
              <b>{`Nathaniel: ${' '}`}</b>
              </span>
              <span className='typewriter'>
                Hey there! I'm a full-stack software developer and nostalgia connoisseur with a keen interest in all things web dev.     
              </span>
            </div>
            <div className='header_nav'>
              {
                selections.map((value,index) => {
                  return(
                    <div className='nav_option' key={index}
                      onMouseEnter={() => {selection!==index ? setSelection(index) : ''}}
                    >
                      <i className={`arrow right ${selection===index ? 'visible' : 'hidden'}`}
                      ></i>
                      <div className={selection===index ? 'visible' : ''}>
                        {value}
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
