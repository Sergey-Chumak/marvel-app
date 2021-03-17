import classes from './ContentMarvelLink.module.css'
import {Link} from 'react-router-dom'
import ComicsMarvel from './ComicsMarvel.jpg'
import HeroesMarvel from './HeroesMarvel.jpeg'

function ContentMarvelLink() {
    return (
        <div className={classes.ContentMarvelLink}>
            <div className={classes.imgLink}>
                <p><strong>Heroes</strong></p>
                <Link to='/heroes'><img src={HeroesMarvel} alt={'Heroes Marvel'}/></Link>
            </div>
            <div className={classes.imgLink}>
                <p><strong>Comics</strong></p>
                <Link to='/comics'><img src={ComicsMarvel} alt={'Comics Marvel'}/></Link>
            </div>
        </div>
    )
}

export default ContentMarvelLink