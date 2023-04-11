import React, {useState} from 'react';

const Imgmeme = () => {

    const [textomeme, setTextomeme] = useState();

    const textmeme = (e) =>{
        setTextomeme(e.target.value);
        console.log(e.target.value);
    }

  return (
    <div>
        <h1>Editá tu propio meme</h1>

        <h2>Escribí tu frase</h2>
        <input onChange={textmeme} className="" type="text" placeholder="Pone tu frase" name="meme"/>

    </div>
  )
}

export default Imgmeme;
