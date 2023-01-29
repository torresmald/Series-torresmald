import React, {useContext} from "react";
import '../../styles/Filters/Filter.scss';
import LoaderContext from "../../context/LoaderContext";



function Filter({ handleSearchInput }) {
    const handleSearch = (event) => {
        handleSearchInput(event.target.value)
    };
    const isLoaded = useContext(LoaderContext);
    return (
        <section className="divFilter">
            {/* En función de la variable de estado loader, se mostrará el input del Search, para que si la web no ha cargado no se muestre.*/}
            <div className={`filter ${!isLoaded ? "display":null }`}>
                <label className="filter__label" htmlFor="">Buscar</label>
                <input className="filter__input" type="text" onChange={(handleSearch)} placeholder='Título de Serie' />
            </div>
        </section>
    )
}

export default Filter;