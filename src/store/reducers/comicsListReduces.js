import {FIRST_PAGE_COMICS, GET_COMICS, LOADER_OFF, OTHER_PAGE_COMICS} from '../actions/actionTypes'

const initialState = {
	comics: [],
	offset: 0,
	loading: true,
	page: 1
}

export default function comicsListsReducer(state = initialState, action) {
	switch (action.type) {
	case FIRST_PAGE_COMICS:
		return {
			...state,
			loading: action.loading,
			offset: action.offset,
			page1: action.page
		}
	case OTHER_PAGE_COMICS: {
		return {
			...state,
			loading: action.loading,
			offset: action.offset,
			page: action.page
		}
	}
	case GET_COMICS:
		return {
			...state,
			comics: action.comics
		}
	case LOADER_OFF:
		return {
			...state,
			loading: action.loading,
		}
	default:
		return state
	}
}