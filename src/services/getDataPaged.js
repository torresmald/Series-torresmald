// Llamada a la API para obtener las series páginadas. Por defecto en la API se muestran de 3 en 3.
 
const getDataPaged = (page) => {
    return fetch(`https://api-series-torresmald.vercel.app/series/paged?page=${page}`)
        .then((res) => res.json())
        .then((res) => {
            const page = res.nextPage;
            const data = res.movies.map((serie) => {
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
                    trailer: serie.trailer,
                    isForAdults: serie.isForAdults,
                    page: page
                }
            });
            return data;
        });
};

export default getDataPaged;