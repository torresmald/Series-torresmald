import React, {useContext} from "react";
import Serie from "./Series";
import '../../styles/Series/ListSerie.scss';
import LoaderContext from "../../context/LoaderContext";

function ListSeries({ series, nextPage, previousPage, showPreviousButton, showNextButton}) {
    const nextPageClick = () => {
        nextPage()
    }
    const previousPageClick = () => {
        previousPage()
    }
    const listSeries = series.map((serie, index) => {
        return <Serie serie={serie} key={index}/>
    })
    const isLoaded = useContext(LoaderContext);

    return (
        <main className="divList">
            <h1 className={`title ${!isLoaded ? "display": null}`}>SERIES TORRESMALD</h1>
            <ul className="listSerie">
                {listSeries}
            </ul>
            <button className={`${!isLoaded ? "hidden" : null} ${!showPreviousButton ? "hidden" : "show"}`} onClick={previousPageClick}> Página Anterior </button>
            <button className={`${!isLoaded ? "hidden" : null} ${showNextButton ? "show" : "hidden"}`} onClick={nextPageClick}>Siguiente Página</button>
        </main>

    )
}

export default ListSeries; 