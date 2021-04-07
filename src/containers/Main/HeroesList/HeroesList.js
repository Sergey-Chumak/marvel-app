import React from 'react'
import {useEffect} from 'react'
import classes from './heroesList.module.css'
import ItemCard from '../../../components/ItemCard/ItemCard'
import PaginationButtons from '../../../components/UI/Pagination/PaginationButtons'
import Loader from '../../../components/UI/Loader/Loader'
import {connect} from 'react-redux'
import {onChangeNumberPage, getHeroes} from '../../../store/actions/heroesListActions'

function HeroesList(props) {

	useEffect(() => {
		props.getHeroes(props.offset)
	}, [props.offset])

	function renderHeroesList() {
		return(
			<div className={classes.heroesContainer}>
				{ props.heroes.length > 0
					? (props.heroes.map((hero, index) => {
						return (
							<ItemCard
								key={index}
								name={hero.name}
								description={
									hero.description
										? hero.description
										: 'Description not found'
								}
								thumbnail={hero.thumbnail.path+'.'+hero.thumbnail.extension}
								classes={'heroes'}
								link={'/heroes/' + hero.id}
							/>
						)
					}))
					: null }
			</div>
		)
	}

	return(
		<div className={classes.heroesList}>
			{
				props.loading
					? <Loader/>
					: <>
						<h1>Heroes</h1>
						{renderHeroesList()}
					</>
			}
			<PaginationButtons
				page={props.page}
				content={'characters'}
				hidden={
					props.loading
						? { visibility: 'hidden' }
						: null
				}
				changeNumberPage={props.onChangeNumberPage}
			/>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		heroes: state.heroesList.heroes,
		offset: state.heroesList.offset,
		loading: state.heroesList.loading,
		page: state.heroesList.page
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeNumberPage: (event, page) => dispatch(onChangeNumberPage(event, page)),
		getHeroes: (offset) => dispatch(getHeroes(offset))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)