import { useState } from 'react';
import { BsTranslate } from 'react-icons/bs';
import { HiOutlineBars4 } from 'react-icons/hi2';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {validateZipCode} from "../validation/nycZipCodes.js";

import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

export default function Nav() {

  const [open, setOpen] = useState(false)
  const parkOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Translate",
      icon: <LanguageIcon />,
    },
  ];

  let search = "";

  const textChange = (event) => {
    search = event.target.value;
  }

  
  // tests if input is valid.  Returns false if not valid;
  const isValidInput = (testInput) => {

  }

  const searchSubmit = (event) => {
    event.preventDefault();
    const parkZip = validateZipCode(event.target.searchbox.value);
    if (parkZip) {
      console.log(parkZip)
    } else {
      console.log("Not found");
    }
    event.target.searchbox.value = "";

  }

  return (

    <nav>
      <div className='nav-logo-container'>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <b>A List Of NYC Parks On the GO</b>
      </div>
      <div className='navbar-links-container'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="">Translate</a>
        <a href="">
          <BsTranslate className="navbar-translate-icon" />
        </a>
        <form className="searchForm" onSubmit={searchSubmit}>
          <input
          className = "searchInput"
          type = "search"
          onChange = {textChange}
          placeholder = "Enter zipcode or New York City borough"
          id = "searchbox"
          name = "searchbox"
          />
          <button className='primary-button' type = 'submit'>🛝 Search Here</button>
        </form>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars4 onClick={() => setOpen(true)} />
      </div>

      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {parkOptions.map((i) => (
              <ListItem key={i.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{i.icon}</ListItemIcon>
                  <ListItemText primary={i.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
}