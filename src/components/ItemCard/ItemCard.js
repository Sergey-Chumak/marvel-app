import React from 'react'
import classes from './ItemCard.module.css'
import {Link} from 'react-router-dom'
import {Tooltip} from '@material-ui/core'

export default function ItemCard(props){
	return (
		<>
			<div className={classes[props.classes]}>
				<Link to={props.link}>
					<img src={props.thumbnail} alt={''} width='200px'/>
					<div className={classes.text}>
						<Tooltip className={classes.tooltip} enterDelay={500} enterNextDelay={300} title={props.description}>
							<p className={classes.description}>{props.description}</p>
						</Tooltip>
						<p className={classes.name}>{props.name}</p>
					</div>
				</Link>
			</div>
		</>
	) 
}
