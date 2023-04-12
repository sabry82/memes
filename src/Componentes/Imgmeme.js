import React, {useState} from 'react';

const Imgmeme = () => {

    const [textomeme, setTextomeme] = useState();

    const textmeme = (e) =>{
        setTextomeme(e.target.value);
        console.log(e.target.value);
    }

  return (
    <div>
        <h1 className='mt-5 mb-3 text-light '>Editá tu propio meme</h1>

        <h2 className='mt-2 mb-3'>Escribí tu frase</h2>
        <input onChange={textmeme} className="form-control w-25 m-auto d-block" type="text" placeholder="Pone tu frase" name="meme"/>

    </div>
  )
}

export default Imgmeme;
