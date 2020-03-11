import React from "react";
import {Switch, Route} from 'react-router-dom';
import Slide from "../Slide/Slide"

import Wonder from "../Slide/Wonder-Woman.jpg";
import Leia from "../Slide/Leia.jpg";
import Lara from "../Slide/Lara.jpg";

const SwicthComponent = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <div className="main-title">POWERFUL WOMEN</div>
            </Route>
            <Route path="/Diana">
                <Slide
                    imagen={Wonder}
                    title="WONDER WOMAN"
                    text="Diana Prince is the most recognizable female superhero in the world. Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere">     
                </Slide>
            </Route>
            <Route path="/Leia">
                <Slide
                    imagen={Leia}
                    title="LEIA ORGANA"
                    text="Leia is the most powerful female figurehead in the Star Wars franchise. This year she will take her final bow in Star Wars: The Last Jedi, as fans celebrate actress Carrie Fisher’s legacy one last time.">      
                </Slide>
            </Route>
            <Route path="/Lara">
                <Slide
                    imagen={Lara}
                    title="LARA CROFT"
                    text="This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures.">
                </Slide>
            </Route>
        </Switch>
    )
}

export default SwicthComponent;
