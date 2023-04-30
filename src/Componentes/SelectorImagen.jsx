import React, { useState } from 'react';

const SelectorImagen = ({setPathImagen}) => {
    const imagenesObj = {
        bob: ['1.jpeg', '2.png', '3.jpeg'],
        hemann: ['1.jpeg', '2.jpeg', '3.jpeg'],
        simpsons: ['1.png', '2.jpeg', '3.png', '4.webp', '5.png']
    }

    const [categoria, setCategoria] = useState('');
    const [imagenes, setImagenes] = useState(imagenesObj.simpsons);

    const seleccionarCategoria = (e) => {
        setCategoria(e.target.value);
        setImagenes(imagenesObj[e.target.value]);
    }

    const seleccionarImagen = (img) => {
        const path = `/memesImg/${categoria}/${img}`;
        setPathImagen(path);
    }

    return (
        <div>
            <select className='form-select' onChange={seleccionarCategoria}>
                <option value="" disabled selected hidden>Seleccione una categoria</option>
                <option value={'simpsons'}>Los Simpsons</option>
                <option value={'bob'}>Bob Esponja</option>
                <option value={'hemann'}>He-mann</option>
            </select>

            <div>
                {categoria && imagenes.map((imagen, i) =>
                    <button onClick={(e) => seleccionarImagen(imagen)} style={{width: '100px', height: '100px', border: '1px solid gray', margin: '5px'}}>
                        <img src={`/memesImg/${categoria}/${imagen}`} key={i} width={'100%'} style={{objectFit: 'contain'}} alt='aaa' />
                    </button>
                )
                }
            </div>

        </div>
    );
};

export default SelectorImagen;