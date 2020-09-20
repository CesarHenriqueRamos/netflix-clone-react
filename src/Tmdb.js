const API_KEY = "4029bbfd73dc3f906d27f1415de877ca";
const API_BASE = "https://api.themoviedb.org/3";

const baseFetch = async (endPoint) =>{
    const req = await fetch(`${API_BASE}${endPoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () =>{
        return [
            {
                slug:'originals',
                title:'Originais do Netflix',
                items: await baseFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:'trending',
                title:'Recomendados para Você',
                items: await baseFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items: await baseFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:'action',
                title:'Ação',
                items: await baseFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:'comedy',
                title:'Comedia',
                items: await baseFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:'horror',
                title:'Terror',
                items: await baseFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:'romance',
                title:'Romance',
                items: await baseFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:'documentary',
                title:'Documentário',
                items: await baseFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
            }
        ]
    },
    getMovieInfo: async (movieId, type)=>{
        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    info = await baseFetch(`/movie/${movieId}?&language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await baseFetch(`/tv/${movieId}?&language=pt-BR&api_key=${API_KEY}`);
                    break;
                default:

            }
        }
        return info;
    }
}