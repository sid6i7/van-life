import React from 'react'
import "../css/PageNotFound.css";
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <div className='not-found--page'>
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to={"/"}><button className='not-found--page-btn'>Return to home</button></Link>
    </div>
  )
}
