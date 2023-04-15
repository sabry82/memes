import React, { useState } from 'react';

const SelectorImagen = ({setPathImagen}) => {
    const imagenesObj = {
        bob: ['1.jpeg', '2.png', '3.jpeg'],
        hemann: ['1.jpeg', '2.jpeg', '3.jpeg'],
        simpsons: ['1.png', '2.jpeg', '3.png', '4.webp', '5.png']
    }

    const [categoria, setCategoria] = useState('simpsons');
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
            <select onChange={seleccionarCategoria}>
                <option value={'simpsons'}>Los Simpsons</option>
                <option value={'bob'}>Bob Esponja</option>
                <option value={'hemann'}>He-mann</option>
            </select>

            <div>
                {imagenes.map((imagen, i) =>
                    <button onClick={(e) => seleccionarImagen(imagen)}>
                        <img src={`/memesImg/${categoria}/${imagen}`} key={i} width={'100px'} alt='aaa' />
                    </button>
                )
                }
            </div>

        </div>
    );
};

export default SelectorImagen;