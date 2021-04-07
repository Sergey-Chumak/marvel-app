import React from 'react'
import classes from './Title.module.css'
import ContentMarvelLink from './ContentMarvelLink/ContentMarvelLink'
import Description from './Description/Description'

export default function Title() {

	return (
		<div className={classes.Title}>
			<Description/>
			<ContentMarvelLink/>
		</div>
	)
}