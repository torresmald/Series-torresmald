import React from 'react'
import getDataLogin from "../../services/getDataLogin.js";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import confetti from 'canvas-confetti';
import '../../styles/Form/FormLogin.scss';


const FormLogin = ({ handleChangeLogin, user, setIsLogged, setUserLoggedEmail, setUserLoggedNickname, handleResetValueLogin, userLoggedEmail, userLoggedNickname, setUserLoggedAge, userLoggedAge, setIsRegistered, setIsLoggedModal}) => {
  // error --> error de usuario o clave incorrectos al hacer el login.
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleClickRegister = () => {
    setIsRegistered(false)
    navigate('/register')
  }
  /* 
  Funcion que se encarga de traer los datos del usuario de la API.
   Si se encuentra al usuario en la base de datos -->
        - Cambiamos las variables de isLogged, isLoggedModal y isRegistered. 
        - Seteamos las variables de Email, Nickname y Age con los valores que trae la API. 
        - Lanzamos un confetti y nos devuelve al Home. 
   Si no se encuentra el usuario lanzamos el error. 
  */

  const handleClick = (event) => {
    event.preventDefault();
    getDataLogin(user).then((data) => {
      if (data.goodResult === true) {
        setIsLogged(true);
        setIsLoggedModal(true);
        setIsRegistered(false);
        setUserLoggedEmail(userLoggedEmail.email = data.email);
        setUserLoggedNickname(userLoggedNickname.nickname = data.nickname);
        setUserLoggedAge(userLoggedAge.age = data.age)
        setTimeout(() => {
          navigate('/')
          confetti();
        }, "500")
      } else if (data.badResult === true) {
        setError(true)
      }
    });

    handleResetValueLogin({ email: '', password: '' })
  }
// Funcion que recoge el valor de los input email y password y los envía la función handleChangeLogin creada en APP.  
  const handleFormLogin = (event) => {
    handleChangeLogin({ ...user, [event.target.id]: event.target.value })
  }

  return (
    <form action="" className="login">
      <p className='loginText'>LOGUEATE</p>
      <label className="login__label" htmlFor="email">Email</label>
      <input type="text" className="login__input" id='email' onChange={handleFormLogin} value={user.email} />
      <label className="login__label" htmlFor="password">Password</label>
      <input type="password" className="login__input" id="password" onChange={handleFormLogin} value={user.password} />
      {error ? <p className='login__error'>{'Usuario o contraseña incorrecto'}</p> : null}
      <button className="login__button" onClick={handleClick}>Login</button>
      <p className='login__areLogin'>¿NO TIENES CUENTA?
      <button type='button' className="login__button_login" onClick={handleClickRegister}>REGÍSTRATE</button>
      </p>
    </form>
  )
}

export default FormLogin;