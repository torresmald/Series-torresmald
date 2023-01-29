import React, { useState } from 'react';
import '../../styles/Modal/ModalForm.scss';
import {useNavigate} from 'react-router-dom'

// Vista de Modal que se muestra cuando te has logueado. 

function ModalLogin({title, body, setIsLoggedModal}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setIsLoggedModal(false);
    setShow(false);
    navigate('/');
  }
  return (
    <>
      {show ?
        <div className="modalBackground">
          <div className='modalContainer'>
            <h2 className='titleModal'>{title}</h2>
            <div className="bodyModal">{body}</div>
            <div className="footerModal">
              <button  onClick={handleClose}>Cerrar</button>
            </div>
          </div>
        </div>
        : null}
    </>
  );
}

export default ModalLogin;