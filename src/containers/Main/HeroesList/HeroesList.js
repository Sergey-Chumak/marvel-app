import {useState, useEffect} from 'react'
import classes from './HeroesList.module.css'
import {GetDataContent} from "../../../GetData/GetDataContent/GetDataContent"
import ItemCard from "../../../components/ItemCard/ItemCard"
import PaginationButtons from "../../../components/Pagination/PaginationButtons"
import Loader from "../../../components/Loader/Loader"

function HeroesList() {

    const [heroes, setHeroes] = useState(undefined)
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const data = await GetDataContent(offset)
            setHeroes(data)
        }
        getData().catch((e)=> {
            document.querySelector('main').innerHTML = e.name+ ': ' + e.message + "<br>Please, again later."
        }).
        finally(()=> setLoading(false))
    }, [offset])

    function renderHeroesList() {
        return(
            <>
                { heroes.length > 0 ?
                    (heroes.map((hero, index) => {
                        return (
                            <ItemCard
                                key={index}
                                name={hero.name}
                                description={hero.description ? hero.description : 'Description not found'}
                                thumbnail={hero.thumbnail.path+'.'+hero.thumbnail.extension}
                                classes={'heroes'}
                                link={'/heroes/' + hero.id}
                            />
                        )
                    }))
                    : null
                }
            </>
        )
    }

    function onChangeNumberPage (event, page) {

        if (page === 1) {
            setOffset(0)
            setLoading(true)
        } else {
            setOffset((page-1) * 20)
            setLoading(true)
        }
        window.scrollTo(0,0)
    }

    return(
        <div className={classes.HeroesList}>
            { loading ?
                <Loader/> :
                <>
                    <h1>Heroes</h1>
                    <div className={classes.heroesContainer}>
                        {renderHeroesList()}
                    </div>
                </>
            }
                <PaginationButtons content={'characters'} hidden={loading ? {visibility: 'hidden'} : null} changeNumberPage={onChangeNumberPage}/>

        </div>
    )
}

export default HeroesList