import React from "react";
import { Link} from "react-router-dom";

function Button (){
    return(
        <>
        <Link to='/login' className='css-button-fully-rounded--grey'>Login</Link>
        <Link to='/register' className='css-button-fully-rounded--grey'>Registro</Link>
        </>
    )
}

export default Button;