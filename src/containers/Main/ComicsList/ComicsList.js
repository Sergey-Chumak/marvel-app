import {useState, useEffect} from 'react'
import classes from './ComicsList.module.css'
import {GetDataComics} from "../../../GetData/GetDataContent/GetDataContent"
import ItemCard from "../../../components/ItemCard/ItemCard"
import Loader from "../../../components/Loader/Loader"
import Pagination from "../../../components/Pagination/PaginationButtons"

function ComicsList () {

    const [comics, setComics] = useState(undefined)
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const data = await GetDataComics(offset)
            setComics(data)
        }
        getData().catch((e)=> {
            document.querySelector('main').innerHTML = e.name+ ': ' + e.message + "<br>Please, again later."
        }).
            finally(()=> setLoading(false))
    }, [offset])

    function renderComicsList() {
        return (
            <>
                {comics.length > 0 ?
                    (comics.map((item, index) => {
                        return (
                            <ItemCard
                                key={index}
                                description={item.title}
                                thumbnail={item.thumbnail.path + '.' + item.thumbnail.extension}
                                classes={'comics'}
                                link={'/comics/' + item.id}
                            />
                        )
                    }))
                    : null
                }
            </>
        )
    }

    function onChangeNumberPage(event, page) {

        if (page === 1) {
            setOffset(0)
            setLoading(true)
        } else {
            setOffset((page - 1) * 20)
            setLoading(true)
        }
        window.scrollTo(0, 0)
    }

    return (
        <div className={classes.ComicsList}>
            {loading ?
                <Loader/> :
                <>
                    <h1>Comics</h1>
                    <div className={classes.comicsContainer}>
                        {renderComicsList()}
                    </div>
                </>
            }
                <Pagination content={'comics'}  hidden={loading ? {visibility: 'hidden'} : null}
                changeNumberPage={onChangeNumberPage}/>
        </div>
    )
}

export default ComicsList