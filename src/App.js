import React from 'react';
import Slide from "./componentes/Slide/Slide";

import Wonder from "./componentes/Slide/Wonder-Woman.jpg"
import Leia from "./componentes/Slide/Leia.jpg"
import Lara from "./componentes/Slide/Lara.jpg"

import './App.css';

const App = () =>{
  const women =[
        {
           imagen: Wonder, 
           title:"WONDER WOMAN",
           text: "Diana Prince is the most recognizable female superhero in the world. Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere"
        },
        {
          imagen: Leia, 
          title: "LEIA ORGANA",
          text: "Leia is the most powerful female figurehead in the Star Wars franchise. This year she will take her final bow in Star Wars: The Last Jedi, as fans celebrate actress Carrie Fisher’s legacy one last time."
        },
        {
          imagen: Lara,
          title: "LARA CROFT",
          text: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures."
        }
];
  return (
    <div className="container">
      {women.map((woman, index) =>{
      return(
      <Slide key={`womanid-${index}`}
             imagen= {woman.imagen}
             title= {woman.title}
             text= {woman.text}>      
      </Slide>
      );
    })}
    </div>
  );
}

export default App;
