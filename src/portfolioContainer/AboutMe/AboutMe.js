import React from 'react'
import './AboutMe.css'
import Education from './Education/Education'


export default function AboutMe() {
  return (
    <div className="aboutme-container">
        <div className='aboutme-parent'>
            <div className='aboutme-head'>
                <span className='about-text'> About Me 
                 </span>
                <div className='row'>
                    <div className='col col1'></div>
                    <div className='col col2'></div>
                    <div className='col col3'></div>
                </div>
            </div>
            <div className='aboutme-body'>
                <div className='aboutme-aside'>
                    <div className='nav-item'>
                        <a href="#">About MySelf</a>
                    </div>
                    <div className='nav-item'>
                        <a href="#">Education</a>
                    </div>
                    <div className='nav-item'>
                        <a href="#">Achievment</a>
                    </div>
                    <div className='nav-item'>
                        <a href="#">Tech Stack</a>
                    </div>
                </div>
               <Education />
            </div>
        </div>
    </div>
  )
}
