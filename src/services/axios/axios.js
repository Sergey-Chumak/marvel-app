import axios from 'axios'

export default axios.create({
	baseURL: 'https://gateway.marvel.com/v1/public/',
	params:{
		ts: 1,
		apikey: '61d28bae0af10d91906b8571300c9801',
		hash: '277240195d40068df046483f3b0d775a',
		limit: 20,
	}
}) 