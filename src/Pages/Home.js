
import React from 'react'
import BannerBackground from '../assets/home-banner-backgorund.png';
// import { useEffect } from 'react';
import BannerImage from '../assets/bannerImage.jpg'
import { FiArrowRightCircle } from 'react-icons/fi';
import Weather from '../Components/Weather';
import { Link } from 'react-router-dom';
import {homeLangs} from './pagesLanguages';

export default function Home({language}) {

  return (
    <div className='home-container' >
     
      <div className='home-banner-container'> 
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            {homeLangs[language]["Your Favorite NYC Parks in One Place"]}
          </h1>
          <p className="primary-text">
          {homeLangs[language]["Living in New York City, I wanted an app that displayed data about NYC parks so that I can easily find nearby parks and plan fun outdoor activities for my child."]}
          </p>
          <Link to="/parks" className='removeUnderline'>
          <button className="secondary-button">
          {homeLangs[language]["Search Now"]} <FiArrowRightCircle />{" "}
          </button>
          </Link>
          <Weather/>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

    </div>
  );
}




