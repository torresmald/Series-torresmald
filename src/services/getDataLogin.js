import axios from "axios";
// Llamada a la API de login para el login del usuario. En funcion de si el usuario se ha logueado correctamente devuelve un valor u otro con las propiedades del objeto userDB. 
const getDataLogin = (user) => {
    const userDB = {
        nickname: '',
        email: '',
        age: '',
        goodResult: false,
        badResult: false
        }
    return axios.post('https://api-series-torresmald.vercel.app/users/login', user)
        .then((response) => {
            if (response) {
                userDB.goodResult = true;
                userDB.email = response.data.email;
                userDB.nickname = response.data.nickname;
                userDB.age = response.data.age;
                return userDB;
            }
        })
        .catch((error) => {
            if (error) {
                userDB.badResult = true
                return userDB;
            }
        });
};


export default getDataLogin;