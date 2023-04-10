import React, {useState} from 'react';

const Imgmeme = () =>{

    const [textmeme, setTextmeme] = useState();

    const textomeme = (e) => {
        setTextmeme(e.target.value);
        console.log(e.target.value);
        
    }

    return(
      <div>
        <h1>Edita tu propio meme</h1>

        <h2>Escribi tu texto</h2>
        <input onChange={textomeme} className='' type='text'placeholder='Pone tu frase' name="meme"/>
      
      </div>  
        
    )
}

export default Imgmeme;