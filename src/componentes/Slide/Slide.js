import React from "react";
import Rss from "./Rss.jpeg"
import Wonder from "./Wonder-Woman.jpg"
import Leia from "./Leia.jpg"
import Lara from "./Lara.jpg"
import "./Slide.css"

const Slide = props =>{
    return(
        <div>
            <section className= "card" style={{  
            backgroundImage: `url(${props.imagen})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
            }}>
            <article className= "card-data">
                <p>Powerful women</p>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <img src={Rss} onClick={handleClick} className= "card-data-icon"/>
            </article>
            </section>
        </div>
    );
}

export default Slide;

const handleClick = (event) =>{
    event.currentTarget.parentElement.classList.toggle("agrandar")
}