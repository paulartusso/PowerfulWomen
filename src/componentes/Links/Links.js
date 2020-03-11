import React from 'react';
import {Link} from 'react-router-dom';
import "./Links.css";

const Links = () =>{
    return(
        
        <nav className="nav">
            <button className="link-button">
            <Link to="/Diana">Diana</Link>
            </button>
            <button className="link-button"> 
            <Link to="/Leia">Leia</Link>
            </button>
            <button className="link-button">
            <Link to="/Lara">Lara</Link>
            </button>
        </nav>
        
    )
}

export default Links;