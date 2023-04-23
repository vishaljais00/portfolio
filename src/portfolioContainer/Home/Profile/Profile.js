import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parents">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href='https://www.facebook.com/groups/340398917711992'>
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href='https://www.instagram.com/heyyvishal_/'>
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href='https://www.youtube.com/watch?v=zM93yZ_8SvE&list=PLj-4DlPRT48nfYgDK00oTjlDF4O0ZZyG8&index=1'>
                            <i className="fa fa-youtube-square"></i>
                        </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello I'M <span className="highlighted-text">Vishal kumar</span>
                    </span>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <TypeAnimation 
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    sequence={[
                                        "Enthusiatic Dev 🔴 ",
                                        2000, 
                                        "Full Stack Developer 💻",
                                        2000, 
                                        "MERN Stack Dev 😎",
                                        2000, 
                                        "Cross Platform Dev 🗺️",
                                        2000,
                                        "React/Next Dev 😎",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building application wity frontend and backend operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                            <button className="btn primary-btn" >
                                {" "}
                                Hire Me
                            </button>
                            <a href="vishalKumar.pdf" download='vishal kumar Resume.pdf'>
                                <button className="btn highlighted-btn">
                                    Get Resume
                                </button>    
                            </a>
                    </div>
                </div>  
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>
        </div>
    </div>
  )
}
