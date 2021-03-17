import axios from "axios"

export default function GetHero (id) {
    return axios.get('https://gateway.marvel.com/v1/public/characters/'+ id, {
        params:{
            ts: 1,
            apikey: '61d28bae0af10d91906b8571300c9801',
            hash: '277240195d40068df046483f3b0d775a',
        }
    }).then(result => {
       const hero = [...result.data.data.results]
        return hero
    })
}