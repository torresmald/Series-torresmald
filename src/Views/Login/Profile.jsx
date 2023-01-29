import React from "react";
import '../../styles/Profile/Profile.scss';

// Vista del perfil de usuario en la que se muestra el email y nickname del usuario logueado. 

function Profile ({ setIsLogged, userLoggedEmail, userLoggedNickname, handleClickValueLoggedEmail, handleClickValueLoggedNickname, handleClickValueLoggedAge}){
    // Funcion encargada de resetear los valores de email, nickname, age y cambiar el valor de isLogged cuando haces logout. 
    const handleLogout = () => {
        handleClickValueLoggedEmail();
        handleClickValueLoggedNickname();
        handleClickValueLoggedAge();
        setIsLogged(false)
    }
    return (
        <header className="profile">
            <h3 className="profile__title">BIENVENID@</h3> 
            <p className="profile__data">EMAIL: {userLoggedEmail}</p>
            <p className="profile__data">NICKNAME: {userLoggedNickname}</p>
            <button className="profile__logout"  onClick={handleLogout}>Logout</button>
        </header>
    )
}

export default Profile;