import {useEffect} from 'react'
import classes from './ComicsList.module.css'
import ItemCard from '../../../components/ItemCard/ItemCard'
import Loader from '../../../components/UI/Loader/Loader'
import React from 'react'
import PaginationButtons from '../../../components/UI/Pagination/PaginationButtons'
import {getComics, onChangeNumberPage} from '../../../store/actions/comicsListActions'
import {connect} from 'react-redux'

function ComicsList (props) {

	useEffect(() => {
		props.getComics(props.offset)
	}, [props.offset])

	function renderComicsList() {
		return (
			<>
				{props.comics.length > 0 ?
					(props.comics.map((item, index) => {
						return (
							<ItemCard
								key={index}
								description={item.title}
								thumbnail={item.thumbnail.path + '.' + item.thumbnail.extension}
								classes={'comics'}
								link={'/comics/' + item.id}
							/>
						)
					}))
					: null
				}
			</>
		)
	}

	return (
		<div className={classes.ComicsList}>
			{props.loading ?
				<Loader/> :
				<>
					<h1>Comics</h1>
					<div className={classes.comicsContainer}>
						{renderComicsList()}
					</div>
				</>
			}
			<PaginationButtons
				page={props.page}
				content={'comics'}
				hidden={props.loading ? {visibility: 'hidden'} : null}
				changeNumberPage={props.onChangeNumberPage}
			/>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		comics: state.comicsList.comics,
		offset: state.comicsList.offset,
		loading: state.comicsList.loading,
		page: state.comicsList.page,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeNumberPage: (event, page) => dispatch(onChangeNumberPage(event, page)),
		getComics: (offset) => dispatch(getComics(offset))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsList)