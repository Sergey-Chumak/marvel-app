import axios from "axios";

function GetDataHeroesSearch (nameStartsWith) {
    return axios.get('https://gateway.marvel.com/v1/public/characters?nameStartsWith='+ nameStartsWith, {
        params:{
            ts: 1,
            apikey: '61d28bae0af10d91906b8571300c9801',
            hash: '277240195d40068df046483f3b0d775a',
            limit: 20
        }
    }).then(result => {
        const heroes = [...result.data.data.results]
        return heroes
    })
}

function GetDataComicsSearch (titleStartsWith) {
    return axios.get('https://gateway.marvel.com/v1/public/comics', {
        params:{
            ts: 1,
            apikey: '61d28bae0af10d91906b8571300c9801',
            hash: '277240195d40068df046483f3b0d775a',
            titleStartsWith: titleStartsWith,
            limit: 20
        }
    }).then(result => {
        const comics = [...result.data.data.results]
        return comics
    })
}

export {GetDataComicsSearch, GetDataHeroesSearch}