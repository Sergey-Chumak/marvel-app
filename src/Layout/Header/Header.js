import React from 'react'
import classes from './Header.module.css'
import NavBar from '../../components/Navigation/NavBar/NavBar'
import Search from '../../components/Navigation/Search/Search'


export default function Header() {
	return(
		<div className={classes.Header}>
			<NavBar/>
			<Search/>
		</div>
	)
}