import classes from './Title.module.css'
import ContentMarvelLink from "../../../components/ContentMarvelLink/ContentMarvelLink"
import Description from "../../../components/Description/Description"

export default function Title() {

    return (
       <div className={classes.Title}>
            <Description/>
            <ContentMarvelLink/>
        </div>
    )
}