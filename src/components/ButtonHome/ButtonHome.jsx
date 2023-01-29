import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/Button/ButtonHome.scss';

function ButtonHome ({ handleOptionInput }) {
    const handleClick = () => {
        handleOptionInput('All')
    }
    return (
        <p className="serie__button"><Link className="css-button-fully-rounded--grey " to="/" onClick={handleClick}>HOME</Link></p>
    );
};

export default ButtonHome;