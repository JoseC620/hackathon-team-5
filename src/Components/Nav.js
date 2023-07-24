
import { BsTranslate } from 'react-icons/bs';
import { inputToParams } from "../validation/validationUtility.js";
import { useNavigate } from "react-router-dom";
import {navLangs} from "./componentsLanguages.js";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


function Nav({ setSearchParams, language, setLanguage }) {

  const navigate = useNavigate();


  const searchSubmit = (event) => {
    event.preventDefault();
    const parkAddr = inputToParams(event.target.searchbox.value);
    if (parkAddr) {
      setSearchParams(parkAddr)
    } else {
      setSearchParams(null)
    }
    event.target.searchbox.value = "";
    navigate("/parks");

  }
  /*
  <Link to="/about">About</Link>
  <a href="">Translate</a> <== removed

          <b>A List Of NYC Parks On the GO</b>
  */

  return (

    <nav>
      <div className='nav-logo-container'>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <b>{navLangs[language]["A List Of NYC Parks On the GO"]}</b>
      </div>
      <div className='navbar-links-container'>
        <Link to="/">{navLangs[language]["Home"]}</Link>
        <Link to="/about">{navLangs[language]["About"]}</Link>

        <select name="languageSelect"
          onChange={(event) => setLanguage(event.target.value)}
          defaultValue="English"
        >
          <option>English</option>
          <option>Español</option>
          <option>中国人</option>
          <option>Русский</option>
          <option>Italiano</option>
          <option>한국인</option>
          <option>Français</option>
          <option>Polski</option>
          <option>عربي</option>
          <option>هندي</option>
        </select>

        <a href="">
          <BsTranslate className="navbar-translate-icon" />
        </a>
        <form className="searchForm" onSubmit={searchSubmit}>
          <input
            className="searchInput"
            type="search"
            placeholder="Zipcode or Borough"
            id="searchbox"
            name="searchbox"
          />
          <button className='primary-button' type='submit'>🛝 {navLangs[language]["Search Here"]}</button>
        </form>
      </div>
      
    </nav>
  );
}

export default Nav;