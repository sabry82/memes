import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const EditorTexto = ({ setTextoyPropiedades, placeholder }) => {
    const [color, setColor] = useState('#fff');
    const [tamano, setTamano] = useState('');
    const [alineacion, setAlineacion] = useState('');
    const [texto, setTexto] = useState('');

    const [displayColorPicker, setDisplayColorPicker] = useState('');



    const crearObjeto = (t, tam, a, c) => {
        return { texto: t, tamano: tam, alineacion: a, color: c };
    }

    const cambiarColor = (e) => {
        setColor(e.hex);

        setTextoyPropiedades(crearObjeto(texto, tamano, alineacion, e.hex));
    }

    const cambiarTamano = (e) => {
        setTamano(e.target.value);
        setTextoyPropiedades(crearObjeto(texto, e.target.value, alineacion, color));
    }

    const cambiarAlineacion = (e) => {
        setAlineacion(e.target.value);
        setTextoyPropiedades(crearObjeto(texto, tamano, e.target.value, color));


    }

    const cambiartexto = (e) => {
        setTexto(e.target.value);
        setTextoyPropiedades(crearObjeto(e.target.value, tamano, alineacion, color));

    }
    const popover = {
        position: 'absolute',
        zIndex: '2',
    }
    const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false)
    };

    return (
        
        <div className='row my-3'>
            <div className='col-12 col-lg-4' >
                <input className='form-control' type={'text'} placeholder={placeholder} value={texto} onChange={cambiartexto} />
            </div>
            <div className='col-12  col-lg-3'>
                <select className='form-select' value={tamano} onChange={cambiarTamano}>
                    <option value="" disabled selected hidden>Tamano</option>
                    <option value='15px'>15 px</option>
                    <option value='35px'>35 px</option>
                    <option value='50px'>50 px</option>
                </select>
            </div>
            <div className='col-12 col-lg-3'>
                <select className='form-select' value={alineacion} onChange={cambiarAlineacion}>
                    <option value="" disabled selected hidden>Alineacion</option>
                    <option value='center'>centrado</option>
                    <option value='left'>izquierda</option>
                    <option value='right'>derecha</option>

                </select>
            </div>
            <div className='col-12 col-lg-2'>

                <button className="btn btn-sm btn-outline-dark w-100" onClick={handleClick}>Pick Color</button>
                {displayColorPicker ?
                    <div style={popover}>
                        <div style={cover} onClick={handleClose} />
                        <ChromePicker color={color} onChange={cambiarColor} />
                    </div>
                    :
                    null}
            </div>
        </div>
    

    );
};

export default EditorTexto;
