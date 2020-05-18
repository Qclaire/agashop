import React, {useState} from "react"
import {Grid, TextField, Typography, Button, Paper, Snackbar,} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import Alert from '@material-ui/lab/Alert';
import icon from "../images/contact.svg"
import bg from "../images/wave2.svg"

import {withFirebase} from "../config/contexts.js"

const useStyles =  makeStyles(theme=>({
	form:{
		maxHeight: "80px",
		color: "white",
	},
	textBox:{
		margin: "1em auto",
		fontSize: "1.3em",
	},
	icon:{
		backgroundImage: `url(${icon})`,
		backgroundSize: "100% 100%",
		backgroundColor: "white",
		minHeight: "65vh",
		backgroundRepeat: "no-repeat"
		
	},
	container:{
		backgroundColor: "white",
		minHeight: "100vh",
		padding: "5%",
		textAlign: "justify",
		zIndex: '100',
		backgroundImage: `url(${bg})`,
		backgroundSize: "inherit",
		backgroundPosition: "top",
		backgroundColor: "white",
		backgroundRepeat: "no-repeat"
		
	},
	btn:{
		maxHeight:"3em",
		height: "3em",
		border: "1px blue solid",
		color: "white",
		fontSize: "1.3em",
		backgroundImage: "linear-gradient(to right, #1A415D, #00BCD4)"

	},
	title:{
		padding: "5%",
		"& *":{
		color: "#000",
		fontWeight: "900",
		}

	}
}))

const Contact = props =>{
	const [data, setData] = useState({})
	const [snackbar, setSnackbar] = useState({state:null, open:false, message:""})
	const styles = useStyles()
	const isInvalid = !(data.question && data.contact)
	
	const handleChange = event=>{
		event.stopPropagation();
		event.preventDefault();

		setData({...data, [event.target.id]:event.target.value})
	}
	const submitQuery = event=>{
		event.preventDefault();

		props.firebase.doAddData("queries", data)
			.then(resp=>{
				setSnackbar({state:"success", open:true, message:`Thank you for your enquiry! We will contact you on ${data.contact}`})
				document.getElementById("queryForm").reset()
			})
			.catch(error=>{
				setSnackbar({state:"error", open:true, message:"Sorry your Message could not be sent. Kindly try again later or call us."})
			})
	}
	return <Grid container direction="row" spacing={10} className={styles.container} id="contact-us">
				<Grid xs={12} className={styles.title}>
					<Typography variant="h4">Contact Us</Typography>
				</Grid>
				<Grid xs={12} sm={6} className={styles.icon}>

				</Grid>

				<Grid xs={12} sm={6} className={styles.form}>
				<form id="queryForm" onSubmit={submitQuery}>
				<Grid container spacing={3} direction="column">
					<Grid xs={12} item>
						<Grid container spacing={3} direction="row">
							<Grid xs={12} sm={6} item>
								<TextField
									className={styles.textBox}
									id="name"
									type="text"
									onChange={handleChange}
									label="Please type your Name here"
									variant="outlined"
									
									required
									fullWidth
								/>
							</Grid>
							<Grid xs={12} sm={6} item >
								<TextField
									className={styles.textBox}
									id="contact"
									type="tel"
									onChange={handleChange}
									label="Contact Number"
									variant="outlined"
									
									required
									fullWidth
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<TextField
							className={styles.textBox}
							id="question"
							type="text"
							onChange={handleChange}
							multiline={true}
							rows={6}
							rowsMax={10}
							label="Please detail your enquire here"
							variant="outlined"
							fullWidth
							required
						/>
					</Grid>

				
				<Grid xs={12} item>
					<Button disabled={false} fullWidth type="submit" className={styles.btn}>Send Query</Button>
				</Grid>
			</Grid>

			<Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={snackbar.open}
				autoHideDuration={4000} onClose={()=>setSnackbar({...snackbar, open:false})}>

				<Alert variant="filled" onClose={()=>setSnackbar({...snackbar, open:false})} severity="success">
					{snackbar && snackbar.message}
				</Alert>
			</Snackbar>
			
		</form>
	
				</Grid>

			</Grid>

						
}
export default withFirebase(Contact);
