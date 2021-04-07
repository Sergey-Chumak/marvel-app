import {FIRST_PAGE_HEROES, GET_HEROES, LOADER_OFF, OTHER_PAGE_HEROES} from './actionTypes'
import {getDataHeroes} from '../../services/getData/getData'

export function onChangeNumberPage(event, page) {
	return dispatch => {
		if (page === 1) {
			dispatch(firstPage())
		} else {
			dispatch(otherPage(page))
		}
		window.scrollTo(0,0)
	}
}
 
function firstPage() {
	return {
		type: FIRST_PAGE_HEROES,
		offset: 0,
		loading: true,
		page: 1
	}
}

function otherPage(page) {
	return {
		type: OTHER_PAGE_HEROES,
		offset: (page-1) * 20,
		loading: true,
		page: page
	}
}

export function getHeroes(offset) {
	return async dispatch => {
		try {
			const data = await getDataHeroes(offset)
			dispatch(setHeroes(data))
		} catch (e) {
			console.log(e)
		} finally {
			dispatch(loaderOff())
		}
	}
}

function setHeroes(data) {
	return {
		type: GET_HEROES,
		heroes: data,
		loading: false
	}
}

function loaderOff() {
	return {
		type: LOADER_OFF,
		loading: false
	}
}

