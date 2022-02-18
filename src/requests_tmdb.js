const API_KEY = 'c9cd87855418aa1c54b21a05a0d9281d';  //chave da API do TMDB
const API_BASE = 'https://api.themoviedb.org/3';  //URL base para a requisição

/*   
    Itens que serão requisitados a API
    - Originais da Netflix (originals)
    - Destaques (trending)
    - Em alta (toprated)
    - Ação | Comédia | Terror | Romance | Documentário
*/ 

const basicFetch = async (endpoint) => {    //função que faz a requisição ao endpoint e retorna um JSON
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () => {    //função que retorna um JSON com os itens da requisição a API
        return[
            {
                slug: 'originals',
                title: 'Originais Netflix',
                itens: [await basicFetch(`/discovery/tv/?with_networks=213&language=pt-BR&api_key=${API_KEY}`)]   //filtra pelo valor 213 que é o filtro para os Originais da Netflix
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                itens: [await basicFetch(`/trending/all/week&language=pt-BR&api_key=${API_KEY}`)]  //filtra somente para os trending da semana
            },
            {
                slug: `toprated`,
                title: 'Em alta',
                itens: [await basicFetch(`/movie/toprated&language=pt-BR&api_key=${API_KEY}`)]
            },    
            {
                slug: 'action',
                title: 'Ação',
                itens: [await basicFetch(`/discover/movie/?with_generes=28&language=pt-BR&api_key=${API_KEY}`)]
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens: [await basicFetch(`/discover/movie/?with_generes=35&language=pt-BR&api_key=${API_KEY}`)]
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: [await basicFetch(`/discover/movie/?with_generes=27&language=pt-BR&api_key=${API_KEY}`)]
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: [await basicFetch(`/discover/movie/?with_generes=10749&language=pt-BR&api_key=${API_KEY}`)]
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                itens: [await basicFetch(`/discover/movie/?with_generes=99&language=pt-BR&api_key=${API_KEY}`)]
            }
        ]
    }
}