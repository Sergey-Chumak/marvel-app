import {FIRST_PAGE_COMICS, GET_COMICS, LOADER_OFF, OTHER_PAGE_COMICS} from './actionTypes'
import {getDataComics} from '../../services/getData/getData'

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
		type: FIRST_PAGE_COMICS,
		offset: 0,
		loading: true,
		page: 1
	}
}

function otherPage(page) {
	return {
		type: OTHER_PAGE_COMICS,
		offset: (page-1) * 20,
		loading: true,
		page: page
	}
}

export function getComics(offset) {
	return async dispatch => {
		try {
			const data = await getDataComics(offset)
			dispatch(setComics(data))

		} catch (e) {
			console.log(e)
		} finally {
			dispatch(loaderOff())
		}
	}
}

function setComics(data) {
	return {
		type: GET_COMICS,
		comics: data,
	}
}

function loaderOff() {
	return {
		type: LOADER_OFF,
		loading: false
	}
}
