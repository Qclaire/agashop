import React, {useState} from "react"
import {Grid, Button, Typography, TextField, Paper} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import {withFirebase} from "../config/contexts.js"
import bg from "../images/order.jpg"


const useStyles = makeStyles(theme=>({
	dropArea:{
		height:"5em",
		border: "2px brown dashed",
	},
	form:{
		color: "white",
	},
	btn:{
		maxHeight:"3em",
		height: "3em",
		border: "1px blue solid",
		color: "#fff",
		fontSize: "1.3em",
		backgroundImage: "linear-gradient(to right, #00BCD4, #1A415D)"

	}
}))

var OrderForm = props=>{

	const [data, setData] = useState({})
	const [feedback, setFeedback] = useState({state:null, message:""})
	const styles =  useStyles();
	const handleChange = event=>{
		event.stopPropagation();
		const value = event.target.value;
		setData({...data, [event.target.id]:value})
	}
	const submitOrder = event =>{
		event.stopPropagation();
		event.preventDefault();
		props.firebase.doAddData("orders", data)
			.then(resp=>{
				setFeedback({state:1, message:"Your order has been recieved! Someone will get in touch with you soon"})
			})
			.catch(error=>{
				setFeedback({state:0, message:"Something went wrong and we could not place your order. Please try again and call our numbers if this persists"})
			})
	}

	const isInvalid = !(data.name && data.links && data.contact && data.description && data.location)
	
	return(
		feedback.state === null ? <form onSubmit={submitOrder} xs={11}  className={styles.form}>				
			<Grid container spacing={2} direction="column">
				<Grid item xs={12}> 
					<Grid container spacing={2} direction="row">
						<Grid xs={12} md={6} item>
							<TextField 
							id="name"
							margin="normal"
							size="small"
							variant="outlined"
							type="text"
							fullWidth
							onChange={handleChange}
							label="Full name"
							required
							/>
						</Grid>

						<Grid xs={12} md={6} item>
							<TextField 
							id="contact"
							margin="normal"
							size="small"
							variant="outlined"
							type="tel"
							fullWidth
							onChange={handleChange}
							label="Contact (whatsApp prefered)"
							required
							/>
						</Grid>
					</Grid>
				</Grid>

				<Grid xs={12} item>
					<TextField 
					id="description"
					multiline={true}
					rows={6}
					rowsMax={10}
					margin="normal"
					size="small"
					variant="outlined"
					type="text"
					fullWidth
					onChange={handleChange}
					label="Detailed order description"
					helperText = "Please be as detailed as possible. You may include links"
					required
					/>
				</Grid>

				<Grid item xs={12} className={styles.dropArea} onDragEnter={(event)=>{event.preventDefault(); alert("DragEnter")}}>
					<input type="file" onDrop={(event)=>{event.preventDefault(); alert("dropped")}}/>
				</Grid>

				<Grid xs={12}item>
					<TextField 
					id="location"
					margin="normal"
					size="small"
					multiline={true}
					rows={3}
					rowsMax={5}
					variant="outlined"
					type="text"
					fullWidth
					onChange={handleChange}
					label="Any idea where we may find your order?"
					helperText = "Please describe or paste GPS cordinates"
					/>
				</Grid>

				<Grid xs={12} item className="themed">
					<Button disabled={false} type="submit" fullWidth className={styles.btn}>Submit Order</Button>
				</Grid>	
			</Grid>
			</form>
			:
			feedback.state === 0 ? <Typography color="secondary">{feedback.message}</Typography>
			: <Typography>{feedback.message}</Typography>		
		)
}
OrderForm = withFirebase(OrderForm)




const newStyles = makeStyles(theme=>({
	text:{
		textAlign: "center",
		fontWeight: "900",
	},
	container:{
		position: "relative",
		width: "100vw",
		maxWidth: '100vw',
		minHeight: "50vh",
		background: "white",
		backgroundColor: "#fff",
		color: "white",
	},
	title:{
		padding: "5% 5% 5% 5%",
		float: "left",
		display: "block",
		"& *":{
		color: "#000",
		fontWeight: "900",
		float: "left",
		}
	
	} ,
	icon:{
		backgroundImage: `url(${bg})`,
		backgroundSize: "cover",
		backgroundColor: "white",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat"
	},
	form:{
		padding: "5%",
		boxShadow: "0 0 0 0"
	}

}))

var Order =props=>{
	const [dialog, setDialog] =  useState(false);
	const styles = newStyles();
	const toggleDialog = event=>{
		event.stopPropagation();
		event.preventDefault();

		setDialog(!dialog)
	}
	return <Grid container spacing={0} direction="row" className={styles.container} id="order">
			<Grid  xs={12} className={styles.title} item>
					<Typography variant="h4">Place Your Order Now</Typography>
			</Grid>

			<Grid  xs={12} sm={6} className={styles.icon} item>

			</Grid>
			
			<Grid  xs={12} sm={6} item>
				<Paper  className={styles.form}>
					<OrderForm />
				</Paper>
			</Grid>
		</Grid>


}





export default Order
