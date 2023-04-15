import React, { useState } from 'react';
import SelectorImagen from './SelectorImagen';

const Imgmeme = () => {
  const textoYEstilosVacio = { texto: '', tamanio: '', alineado: '', font: '' };
  const [textoYEstiloSuperior, setTextoYEstiloSuperior] = useState(textoYEstilosVacio);
  const [pathImg, setPathImg] = useState('');

  const textmeme = (e) => {

  }

  const setPathImagen = (path) => {
    setPathImg(path);
  }

  return (
    <div>
      <h1 className='mt-5 mb-3 text-light '>Editá tu propio meme</h1>

      <SelectorImagen setPathImagen={setPathImagen} />

      <h2 className='mt-2 mb-3'>Escribí tu frase</h2>
      <input onChange={textmeme} className="form-control w-25 m-auto d-block" type="text" placeholder="Pone tu frase" name="meme" />

      <figure className="text-center position-relative" id="exportar">
                <p className="w-100 px-30 position-absolute top-0 start-30  h1 text-center" style={{color:'white'}}>ppapapap</p>
                <img src={pathImg} width={'400px'} className="figure-img mt-3 d-block m-auto" alt="meme" />
            </figure>

    </div>
  )
}

export default Imgmeme;
