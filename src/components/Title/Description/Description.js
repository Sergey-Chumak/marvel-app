import React from 'react'
import classes from './Description.module.css'

export default function Description() {
	return(
		<div className={classes.DescriptionMarvel}>
			<h1>Test app on the Marvel universe</h1>
			<p className={classes.descriptionText}>The source of information <a target='_blank' rel = "noreferrer" href='https://www.marvel.com/'>marvel.com</a> </p>
		</div>
	)
}