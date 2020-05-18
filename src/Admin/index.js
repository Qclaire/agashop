import React, {useState, useEffect} from "react"
import {withFirebase} from "../config/contexts.js"
import {
	Container, Grid, Dialog, DialogContent, DialogAction, Typography
} from "@material-ui/core"
const AdminFace =props=>{
	const [orders, setOrders] =  useState(null)
	
	useEffect(()=>{
		return props.firebase.getSnapshot("orders").orderBy("timestamp").onSnapshot(snapshot=>{
			const arr = []
			snapshot.docs.forEach(doc=>{
				arr.push([{docid:doc.id, ...doc.data()}])
			})
			setOrders(arr)
		}), []
	})
	return (
		<Container>
			{
			orders === null ? <p>Looking for orders</p> : orders === [] ? <p>No orders</p>
			:
			orders && orders.map(order=>{
				return <h1>{order.name}</h1>
				})
			}
		</Container>
		)
}

export default withFirebase(AdminFace)