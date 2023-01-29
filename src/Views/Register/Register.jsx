import React from "react";
import FormRegister from '../../components/Form/FormRegister.jsx';
import '../../styles/Form/Register.scss';
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";

// Vista que incluye el formulario y el boton de Home. 

function Register({ handleOptionInput, handleChangeRegister, handleClickValueRegister, setIsRegistered, user}) {
    return (
        <div className="divRegister">
            <FormRegister handleChangeRegister={handleChangeRegister} handleClickValueRegister={handleClickValueRegister} setIsRegistered={setIsRegistered} user={user}/>
            <div className="divRegister__buttonHome">
            <ButtonHome handleOptionInput={handleOptionInput} />
            </div>
            
        </div>
    )
}

export default Register; 