import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import '../../styles/Filters/Option.scss';
import LoaderContext from "../../context/LoaderContext";

function Option({ series, handleOptionInput, option }) {
    const serieId = series.map((serie) => {
        return serie.id;
    })
    const serieToString = serieId.toString();
    const isLoaded = useContext(LoaderContext);
    return (
        <section className="divOption">
            {/* En función de la variable de estado loader, se mostrará el Select, para que si la web no ha cargado no se muestre.*/}
            <div className={`option ${!isLoaded ? "display" : null}`}>
                <label className="option__label" htmlFor="titulo">Titulo</label>
                <select className="option__select" name="" id="titulo" value={option} onChange={(event) => handleOptionInput(event.target.value)}>
                    <option value='All'>SELECCIONA</option>
                    {series.map((serie, index) => {
                        return <option value={serie.title} key={index}>{serie.title}</option>
                    })}
                </select>
                {/* En funcion de la serie elegida en el desplegable, te llevará a . la ruta de detalle de dicha serie */}
                <Link to={`selected/${serieToString}`} className='option__select_link'>
                    <button className="option__select_button">Enviar</button>
                </Link>
            </div>
        </section>
    )
}

export default Option;