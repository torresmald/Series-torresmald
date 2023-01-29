// Llamada a la API para obtener todas las series. 

const getAllSeries = () => {
    return fetch(`https://proyecto-react-api.vercel.app/series`)
        .then((res) => res.json())
        .then((res) => {
            const data = res.map((serie) => {
                return {
                    id: serie.id,
                    title: serie.title,
                    director: serie.director,
                    genre: serie.genre,
                    platform: serie.platform,
                    seasons: serie.seasons,
                    synopsis: serie.synopsis,
                    year: serie.year,
                    picture: serie.picture,
                    isForAdults: serie.isForAdults
                }
            });
            return data;
        });
};

export default getAllSeries;