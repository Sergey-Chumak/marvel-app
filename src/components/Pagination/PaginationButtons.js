import classes from './Pagination.module.css'
import {useEffect, useState} from "react"
import getDataTotal from "../../GetData/GetDataTotal/GetDataTotal"
import Pagination from "@material-ui/lab/Pagination"

function PaginationButtons(props) {

    const [howManyButtons, setManyButtons] = useState(undefined)

    useEffect(() => {
        async function getData () {
            const totalHeroes = await getDataTotal(props.content)
            const howManyButtons = Math.ceil(totalHeroes.total/totalHeroes.limit)
            setManyButtons(howManyButtons)
        }
        getData().catch((e)=> {
            document.querySelector('main').innerHTML = e.name+ ': ' + e.message + "<br>Please, again later."
        })
    },[props.content])

    return(
        <div style={props.hidden} className={classes.PaginationButtons}>
            <Pagination count={howManyButtons} page={props.page} siblingCount={2} boundaryCount={2} selected={true} onChange={props.changeNumberPage}/>
        </div>
    )
}

export default PaginationButtons