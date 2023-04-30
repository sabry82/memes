import html2canvas from "html2canvas";
import React, { useState } from "react";
import EditorTexto from "./EditorTexto";
import SelectorImagen from "./SelectorImagen";

const Imgmeme = () => {
    const textoYEstilosVacio = {
        texto: "",
        tamano: "",
        alineacion: "",
        color: "",
    };
    const [textoYEstiloSuperior, setTextoYEstiloSuperior] =
        useState(textoYEstilosVacio);
    const [textoYEstiloInferior, setTextoYEstiloInferior] =
        useState(textoYEstilosVacio);
    const [pathImg, setPathImg] = useState("");

    const setPathImagen = (path) => {
        setPathImg(path);
    };

    const Descargar = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function (
            canvas
        ) {
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        });
    };

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0">
                        <h2>
                        EDITA TU PROPIO MEME
                        </h2>
                    </span>
                </div>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <h3 className="mt-4">ELIJE UNA IMAGEN</h3>

                        <SelectorImagen setPathImagen={setPathImagen} />

                        <h3 className="mt-3">ESCRIBI TU FRASE</h3>

                        <EditorTexto
                            placeholder={"Texto Superior"}
                            setTextoyPropiedades={(obj) =>
                                setTextoYEstiloSuperior(obj)
                            }
                        />

                        <EditorTexto
                            placeholder={"Texto Inferior"}
                            setTextoyPropiedades={(obj) =>
                                setTextoYEstiloInferior(obj)
                            }
                        />
                    </div>
                    <div class="col-12 col-lg-4">
                        <figure
                            className="text-center position-relative"
                            id="exportar"
                            style={{ width: "400px", margin: "auto" }}
                        >
                            <p
                                className="position-absolute top-0"
                                style={{
                                    color: textoYEstiloSuperior.color,
                                    textAlign: textoYEstiloSuperior.alineacion,
                                    fontSize: textoYEstiloSuperior.tamano,
                                    width: "400px",
                                }}
                            >
                                {textoYEstiloSuperior.texto}
                            </p>
                            <img
                                src={
                                    pathImg ? pathImg : "/memesImg/noimage.jpeg"
                                }
                                width={"400px"}
                                className="figure-img mt-3 d-block m-auto"
                                style={{ border: "2px solid gray" }}
                                alt="meme"
                            />
                            <p
                                className="position-absolute bottom-0"
                                style={{
                                    color: textoYEstiloInferior.color,
                                    textAlign: textoYEstiloInferior.alineacion,
                                    fontSize: textoYEstiloInferior.tamano,
                                    width: "400px",
                                }}
                            >
                                {textoYEstiloInferior.texto}
                            </p>
                        </figure>

                        <button
                            onClick={Descargar}
                            type="button"
                            className="btn btn-primary mt-4 mb-4"
                        >
                            Descargar meme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Imgmeme;
