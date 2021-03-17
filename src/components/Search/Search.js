import classes from './Search.module.css'
import {GetDataHeroesSearch, GetDataComicsSearch} from "../../GetData/GetDataSearch/GetDataSearch"
import {useEffect, useState} from "react"
import Backdrop from "../Backdrop/Backdrop"
import {Link} from 'react-router-dom'

export default function Search() {

    const input = document.querySelector('input')
    const [heroes, setHero] = useState([])
    const [comics, setComics] = useState([])
    const [inputValue, setValue] = useState('')

    useEffect(() => {
        async function searchHero() {
            if (inputValue) {
                const heroes = await GetDataHeroesSearch(inputValue)
                setHero(heroes)
            } else {
                setHero('')
            }
        }
        searchHero().catch((e)=> {
            document.querySelector('main').innerHTML = e.name+ ': ' + e.message + "<br>Please, again later."
        })

    }, [inputValue])

    useEffect(() => {
        async function searchComics() {
            if (inputValue) {
                const comics = await GetDataComicsSearch(inputValue)
                setComics(comics)
            } else {
                setComics('')
            }

        }

        searchComics().catch((e)=> {
            document.querySelector('main').innerHTML = e.name+ ': ' + e.message + "<br>Please, again later."
        })
    }, [inputValue])

    const debounce = (fn, ms) => {
        let timeout;

        return function () {
            const fnCall = () => {
                fn.apply(this, arguments)
            }
            clearTimeout(timeout)
            timeout = setTimeout(fnCall, ms)
        }
    }

    function onChangeHandler() {
        setValue(input.value.trim())
    }

    onChangeHandler = debounce(onChangeHandler, 500)

    function closeSearch() {
        input.value = ''
        setValue('')
    }


    return (
        <>
            <div className={classes.Search}>
                <input placeholder={'Search'} type={'search'} onChange={onChangeHandler} className={"inputSearch "+classes.Search}/>
                {inputValue ?
                    <div className={classes.container}>
                        {heroes.length > 0 ?
                            <div className={classes.heroes}>
                                <p>Heroes</p>
                                <ul>
                                    {heroes.map((hero, index) => {
                                        return (
                                            <Link onClick={closeSearch} to={'/heroes/' + hero.id}
                                                  style={{textDecoration: 'none'}}>
                                                <li key={index}>
                                                    {hero.name}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                            : <div className={classes.heroes}><p>Hero is not found</p></div>}
                        {comics.length > 0 ?
                            <div className={classes.comics}>
                                <p>Comics</p>
                                <ul>
                                    {comics.map((comics, index) => {
                                        return (
                                            <Link onClick={closeSearch} to={'/comics/' + comics.id}
                                                  style={{textDecoration: 'none'}}>
                                                <li key={index}>
                                                    {comics.title}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                            : <div className={classes.comics}><p>Comics is not found</p></div>}
                    </div> : null}
            </div>

            {inputValue ?
                <Backdrop onClick={closeSearch}/> : null
            }
        </>
    )
}