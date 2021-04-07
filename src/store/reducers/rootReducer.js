import {combineReducers} from 'redux'
import heroesListReducer from './heroesListReducer'
import comicsListReducer from './comicsListReduces'

export default combineReducers({
	heroesList: heroesListReducer,
	comicsList: comicsListReducer
}) 