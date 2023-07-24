import AboutBackground from '../assets/about-background.png';
import AboutBackgroundImage from '../assets/about-background-image.png';
import { BsPlayBtnFill } from 'react-icons/bs';

export default function About() {
  return (
    <div className='about'>
      <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" className='homeimg'/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Spend More Time Outside. Stay healthy. Live Longer.
        </h1>
        <p className="primary-text">
        As a dad of a 4-year-old boy living in New York City, I want an app that displays data about NYC parks so that I can easily find nearby parks and plan fun outdoor activities for my son during his school vacation. The app should provide information such as park locations, amenities, playgrounds, walking trails, and any special events or activities happening in the parks. It should also include user reviews and ratings to help me choose the most child-friendly parks with positive feedback from other parents. With this app, I hope to keep my son entertained, burn his energy, and create memorable experiences in the city's beautiful parks.
        </p>
        {/* <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam. OTHER USER STORIES OR TESIMONIALS.
        </p> */}
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsPlayBtnFill /> Watch Video 
          </button>
          </div>
      </div>   
     </div>
    </div>
  );
}
