import React, { useEffect, useState } from 'react';
import './Nav.css';
import {Link} from 'react-scroll';


function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>{
      if (window.scrollY > 100) {
        handleShow(true);
      }else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className= {`nav ${show && "nav_black"}`}>
      <img className="nav__logo"
       src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
       alt="Netflix Logo"/>
      <div>
        <ul className='nav_link'>
         <li><Link to='banner' smooth={true}>Home</Link></li>
         <li><Link to='netflix_originals' offset={-55} smooth={true}>Netflix Originals</Link></li>
         <li><Link to='trending_now' offset={-55} smooth={true}>Trending Now</Link></li>
         <li><Link to='top_rated' offset={-55} smooth={true}>Top Rated</Link></li>
         <li><Link to ='tv_topRated' offset={-55} smooth={true}>TV Top Rated</Link></li>
         <li><Link to='action_movies' offset={-55} smooth={true}>Action</Link></li>
         <li><Link to='comedy_movies' offset={-55} smooth={true}>Comedy</Link></li>
         <li><Link to='horror_movies' offset={-55} smooth={true}>Horror</Link></li>
         <li><Link to='romance_movies' offset={-55} smooth={true}>Romance</Link></li>
         <li><Link to='documentaries'  offset={-55} smooth={true}>Documentaries</Link></li>
        </ul>
      </div>

      <img className="nav__avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
      alt="Avatar logo"/>
      

    </div>
  )
}

export default Nav