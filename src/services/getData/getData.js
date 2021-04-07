import axios from '../axios/axios'

export function getHero (id) {
	return axios.get(`/characters/${id}`)
		.then(result => [...result.data.data.results])
}

export function getComics (id) {
	return axios.get(`/comics/${id}`)
		.then(result => [...result.data.data.results])
}

export function getDataHeroes (offset) {
	const params = {
		offset: offset
	}
	return axios.get('/characters', { params })
		.then(result => [...result.data.data.results])
}

export function getDataComics (offset) {
	const params = {
		offset: offset
	}
	return axios.get('/comics', { params })
		.then(result => [...result.data.data.results])
} 

export function getDataHeroesSearch (nameStartsWith) {
	return axios.get(`/characters?nameStartsWith=${nameStartsWith}`)
		.then(result => [...result.data.data.results])
}

export function getDataComicsSearch (titleStartsWith) {
	return axios.get(`/comics?titleStartsWith=${titleStartsWith}`)
		.then(result => [...result.data.data.results])
}

export function getHowManyButtons(content) {
	return axios.get(`/${content}`)
		.then(result => Math.ceil(result.data.data.total/result.data.data.limit))
}
