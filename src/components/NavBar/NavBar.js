import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom"

export default function NavBar(){
    return(
        <div className={classes.NavBar}>
            <NavLink activeClassName={classes.active} className={classes.link} to='/' exact>Home</NavLink>
            <div className={classes.linkContent}>
                <NavLink activeClassName={classes.active} className={classes.link} to='/heroes'>Heroes</NavLink>
                <NavLink activeClassName={classes.active} className={classes.link} to='/comics'>Comics</NavLink>
            </div>
        </div>
    )
}