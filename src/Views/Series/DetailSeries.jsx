import React from "react";
import { useParams } from 'react-router-dom';
import '../../styles/Series/DetailSerie.scss';
import ButtonHome from '../../components/ButtonHome/ButtonHome.jsx';
import ModalForm from "../Modal/ModalForm.jsx";

function DetailSeries({ series, handleOptionInput, userLoggedAge }) {
    const params = useParams();
    const selectedSerie = series.find((serie) => {
        return serie.id === parseInt(params.id);
    });
    return (
        // Si el usuario es menor de edad y la serie elegida es para mayores de edad, se mostrará el Modal. En caso contrario se mostrará el detalle de la Serie. 
        <>
            {userLoggedAge < 18 && selectedSerie.isForAdults === true ?
                <>
                    <ModalForm title={'PROHIBIDO'} body={'No tienes edad suficiente para acceder'} />
                </>
                :
                <div className="serie">
                    <h2 className="serie__title">{selectedSerie.title}</h2>
                    <div className="imageGrid">
                        <img src={selectedSerie.picture} alt="Foto Serie" className="serie__image" />
                        <div className="allGrid">
                            <div className="grid">
                                <p className="grid__director"> DIRECTOR: </p>
                                <ul className="grid__director_list">
                                    {selectedSerie.director.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul>
                                <p className="grid__genre"> GENERO:</p>
                                <ul className="grid__genre_list">
                                    {selectedSerie.genre.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul>
                                <p className="grid__platform"> PLATAFORMA:</p>
                                <p className="grid__platform_platform">{selectedSerie.platform}</p>
                                <p className="grid__seasons"> TEMPORADAS: </p>
                                <p className="grid__seasons_seasons">{selectedSerie.seasons}</p>
                                <p className="grid__year"> AÑO EMISION: </p>
                                <p className="grid__year_year">{selectedSerie.year}</p>
                                <div className="grid__sinopsys">
                                    <p>{selectedSerie.synopsis}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonHome">
                        <ButtonHome handleOption={handleOptionInput} />
                    </div>
                </div>
            }
        </>
    )
}

export default DetailSeries;

