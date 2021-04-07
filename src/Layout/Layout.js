import React from 'react'
import classes from './Layout.module.css'
import Title from '../components/Title/Title'
import {Route, Switch, Redirect} from 'react-router-dom'
import HeroesList from '../containers/Main/HeroesList/HeroesList'
import ComicsList from '../containers/Main/ComicsList/ComicsList'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import PersonalPageHero from '../containers/Main/PersonalPageHero/PersonalPageHero'
import PageComics from '../containers/Main/PageComics/PageComics'

function Layout() {

	return (
		<div className={classes.Layout}>
			<header>
				<Header/>
			</header>
			<main>
				<Switch>
					<Route path='/' component={Title} exact={true}/>
					<Route path='/comics' component={ComicsList} exact/>
					<Route path='/heroes' component={HeroesList} exact/>
					<Route path='/heroes/:id' component={PersonalPageHero} exact/>
					<Route path='/comics/:id' component={PageComics} exact/>
					<Redirect to={'/'} />
				</Switch>
			</main>
			<footer>
				<Footer/>
			</footer>
		</div>

	)

}

export default Layout