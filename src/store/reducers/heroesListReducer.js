import {FIRST_PAGE_HEROES, GET_HEROES, LOADER_OFF, OTHER_PAGE_HEROES} from '../actions/actionTypes'

const initialState = {
	heroes: [],
	offset: 0,
	loading: true,
	page: 1
}

export default function heroesListReducer(state = initialState, action) {
	switch (action.type) {
	case FIRST_PAGE_HEROES:
		return { 
			...state,
			loading: action.loading,
			offset: action.offset,
			page: action.page
		}
	case OTHER_PAGE_HEROES: {
		return {
			...state,
			loading: action.loading,
			offset: action.offset,
			page: action.page
		}
	}
	case GET_HEROES:
		return {
			...state,
			heroes: action.heroes
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