import axios from "axios"

function getDataTotal(props) {
    return axios.get('https://gateway.marvel.com/v1/public/'+ props , {
        params:{
            ts: 1,
            apikey: '61d28bae0af10d91906b8571300c9801',
            hash: '277240195d40068df046483f3b0d775a',
            limit: 20,
            offset: 0
        }
    }).then(result => {
        const data = {total: result.data.data.total,
                        limit: result.data.data.limit}
        return data
    })
}

export default getDataTotal