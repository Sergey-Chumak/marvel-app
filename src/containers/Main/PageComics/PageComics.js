import React from 'react'
import {useEffect, useState} from 'react'
import classes from './PageComics.module.css'
import ItemCard from '../../../components/ItemCard/ItemCard'
import {getComics} from '../../../services/getData/getData'
import Loader from '../../../components/UI/Loader/Loader'

function PageComics (props) {

	const [comics, setComics] = useState(undefined)
	const [heroesList, setHeroesList] = useState(undefined)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		async function getData() {
			const comics = await getComics(props.match.params.id)
			const heroesList = await getComics(props.match.params.id+'/characters')
			setComics(comics)
			setHeroesList(heroesList)
		}
		getData().catch((e)=> {
			document.querySelector('main').innerHTML = e.name+ ': ' + e.message + '<br>Please, again later.'
		})
			.finally(()=> setLoading(false))
	}, [props.match.params.id])

	return(
		<>
			{ loading ?
				<Loader/> :
				<div className={classes.PageComics}>
					<div className={classes.comics}>
						<h1>{comics[0].title}</h1>
						<img className={classes.imgComics} src={comics[0].thumbnail.path + '.' + comics[0].thumbnail.extension} alt={comics[0].title}/>
					</div>
					<p className={classes.titleListHeroes}>Heroes from this comics:</p>
					<div className={classes.containerHeroes} style={heroesList.length > 0 ? {justifyContent: 'flex-start'}: {justifyContent: 'center'}}>
						{ heroesList.length > 0 ?
							( heroesList.map((hero) => {
								return (
									<ItemCard
										key={hero.id}
										name={hero.name}
										description={hero.description ? hero.description : 'Description not found'}
										thumbnail={hero.thumbnail.path+'.'+hero.thumbnail.extension}
										classes={'heroes'}
										link={'/heroes/' + hero.id}
									/>
								)
							}))
							: <p className={classes.heroesNotFound}>No heroes from this comics :(</p>
						}
					</div>
				</div>
			}
		</>
	)
}

export default PageComics