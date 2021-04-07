import React from 'react'
import {useEffect, useState} from 'react'
import classes from './PersonalPageHero.module.css'
import {getHero} from '../../../services/getData/getData'
import ItemCard from '../../../components/ItemCard/ItemCard'
import Loader from '../../../components/UI/Loader/Loader'

function PersonalPageHero(props) {

	const [hero, setHero] = useState(undefined)
	const [comicsList, setComicsList] = useState(undefined)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)

		async function getData() {
			const hero = await getHero(props.match.params.id)
			const comicsList = await getHero(props.match.params.id + '/comics')
			setHero(hero)
			setComicsList(comicsList)
		}

		getData().catch((e) => {
			document.querySelector('main').innerHTML = e.name + ': ' + e.message + '<br>Please, again later.'
		})
			.finally(() => setLoading(false))
	}, [props.match.params.id])

	return (
		<>
			{loading
				? <Loader/>
				: <div className={classes.PersonalPageHero}>
					<div className={classes.hero}>
						<h1>{hero[0].name}</h1>
						<img className={classes.imgHero}
							src={hero[0].thumbnail.path + '.' + hero[0].thumbnail.extension} alt={hero[0].name}/>
						<p>{hero[0].description ? hero[0].description : 'Description not found'}</p>
						<div>
							{hero[0].urls.map((url, index) => {
								return (
									<a key={index} target='_blank' rel="noreferrer" href={url.url}>{url.type}</a>
								)
							})}
						</div>
					</div>
					<p className={classes.titleListComics}>Сomics with this hero:</p>
					<div className={classes.containerComics}
						style={comicsList.length > 0 ? {justifyContent: 'flex-start'} : {justifyContent: 'center'}}>
						{comicsList.length > 0
							? (comicsList.map((item, index) => {
								return (
									<ItemCard
										link={'/comics/' + item.id}
										key={index}
										description={item.title}
										thumbnail={item.thumbnail.path + '.' + item.thumbnail.extension}
										classes={'comics'}
									/>
								)
							}))
							: <p className={classes.comicsNotFound}>No comics with this hero</p>
						}
					</div>
				</div>
			}
		</>
	)
}

export default PersonalPageHero