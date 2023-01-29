import React from "react";
import {Link} from 'react-router-dom';
import '../../styles/Series/Serie.scss'

function Serie({serie}) {

    return (
        <article className="series">
            <li className="series__cardSerie">
                <Link to = {`detail/${serie.id}`} className='series__cardSerie_link'>
                    <h2>{serie.title}</h2>
                    <img src={serie.picture} alt="Foto Serie"  className="series__cardSerie_image"/>
                </Link>
            </li>
        </article>
    )
}

export default Serie;