import React from "react";
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";

// Vista que se muestra cuando la Url no es válida. 

function UrlNotFound () {
    const image = 'https://res.cloudinary.com/dj5hu7p44/image/upload/v1674253776/error-404-foxplay_owg3xw.jpg'
    return(
        <>
        <h1 className="title">SERIES MALEON</h1>
        <img src={image} alt="URLNOTFOUND" />
        <ButtonHome />
        </>
        
    )
}

export default UrlNotFound;