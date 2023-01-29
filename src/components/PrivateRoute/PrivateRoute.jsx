import { Navigate } from 'react-router-dom';

// Componente que gestiona las rutas privadas en funcion de si el usuario está logueado o no. 
const PrivateRoute = ({ isLogged, component }) => {
  if (isLogged) return component;
  if (!isLogged) return <Navigate to="/login" />;
};

export default PrivateRoute;