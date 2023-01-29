import '../../styles/Loader/Loader.scss';
import {useContext} from 'react';
import LoaderContext from '../../context/LoaderContext';

// Loader de la web que se muestra cuando no han cargado los datos. 
function Loader (){
    const isLoaded = useContext(LoaderContext);
    return(
        <div className={`loader ${isLoaded ? "display" : null}`}></div>
    );
};

export default Loader;