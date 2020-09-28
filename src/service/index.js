import axios from 'axios';

const api_key = '6db8853038965cfd7472e62a8530ec4d';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = url + '/movie/now_playing';
const topRatedUrl = url + '/discover/movie';
const genreUrl = url + '/genre/movie/list';
const movieUrl = url + '/discover/movie';
const movieUrl1 = url + '/movie/';
const personUrl = url + '/trending/person/week';
const posterUrl = 'https://image.tmdb.org/t/p/original/'

export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: api_key,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            title: m['title'],
            popularity: m['popularith'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']
        }))

        return modifiedData;

    } catch (error) {

    }

}
export const fetchNowPLaying = () => {

}
export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(genreUrl, {
            params: {
                api_key: api_key,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    } catch (error) {

    }

}
export const fetchMovieByGenre = async (genre_id) => {
    try {
        const { data } = await axios.get(movieUrl, {
            params: {
                api_key: api_key,
                language: 'en_US',
                page: 1,
                with_genres: genre_id
            }
        })
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            title: m['title'],
            popularity: m['popularith'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']
        }))

        return modifiedData;

    } catch (error) {

    }
}

export const fetchPersons = async () => {
    try {
        const { data } = await axios.get(personUrl, {
            params: {
                api_key: api_key,


            }
        })

        const modifiedData = data['results'].map((p) => ({
            id: p['id'],
            popularity: p['popularity'],
            name: p['name'],
            profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
            known: p['known_for_department']
        }))
        return modifiedData;
    } catch (error) {

    }

}

export const fetchTopRatedMovie = async () => {
    try {
        const { data } = await axios.get(topRatedUrl, {
            params: {
                api_key: api_key,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            title: m['title'],
            popularity: m['popularith'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']
        }))

        return modifiedData;
    } catch (error) {

    }

}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get((movieUrl1 + id), {
            params: {
                api_key: api_key,
                language: 'en_US'
            }
        });
        return data;
    } catch (error) {
        console.log('ERROR')

    }

}

export const fetchSimiliarMovie = async (id) =>{
    try {
        const {data} = await axios.get(movieUrl1+id+'/similar',{
            params:{
                api_key: api_key,
                language: 'en_US'
            }
        })
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            title: m['title'],
            popularity: m['popularith'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']
        }))

        return modifiedData;
        
    } catch (error) {
        
    }

}
export const fetchCasts = async (id) => {
    try {
        const { data } = await axios.get(movieUrl1 + id + '/credits', {
            params: {
                api_key: api_key
            }
        });
        const modifiedData = data['cast'].map((c) => ({
            id: c['cast_id'],
            character: c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w300' + c['profile_path']
        }))
        return modifiedData;
    } catch (error) {

    }

}


export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(movieUrl1 + id + '/videos', {
            params: {
                api_key: api_key,
                language: 'en-US'
            }
        })
        console.log('KEYS', data['results'][0])
        return data['results'][0];
    } catch (error) {
        console.log('ERROR')

    }

}



