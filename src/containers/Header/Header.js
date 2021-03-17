import classes from './Header.module.css'
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";


export default function Header() {
    return(
        <div className={classes.Header}>
            <NavBar/>
            <Search/>
        </div>
    )
}