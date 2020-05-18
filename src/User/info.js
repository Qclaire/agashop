import React from "react"
import {Grid, Typography, Paper} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import icon from "../images/svg.svg"


const useStyle = makeStyles(theme=>({
	about:{
		backgroundColor: "white",
		minHeight: "50vh",
		padding: "10% 5%",
		textAlign: "justify",
		zIndex: '100'
		
	},
	textContainer:{
		position: "relative",
		maxHeight: "100%",
	},
	icon:{
		backgroundImage: `url(${icon})`,
		backgroundSize: "100% 100%",
		backgroundColor: "white",
		position: "relative",
		maxHeight: "100%",
		backgroundRepeat: "no-repeat"
	},
	text:{
		fontSize: "1.3em",
		lineHeight: "100%",
		backgroundColor: "white",
		position: "relative",
		maxHeight: "100%",
		lineHeight: "50px",
		textAlign: "justify",
	},
	container:{
		margin: "auto auto",
		position: "relative",
		maxHeight: "100%",
	},
	title:{
		padding: "5% 5% 10% 5%",
		float: "left",
		display: "block",
		"& *":{
		color: "#000",
		fontWeight: "900",
		float: "left",
		}
	
	} ,
}))

const Info =  props =>{
	const styles = useStyle();

	return <Grid container direction="row" spacing={10} id="info-content" className={styles.about} id="about-us">
				<Grid  xs={12} className={styles.title} item>
					<Typography variant="h4">About us</Typography>
				</Grid>
				
				<Grid xs={12} sm={6} item className={styles.icon}></Grid>
				<Grid xs={12} md={6} item className={styles.textContainer}>
					<Typography variant="body1" className={styles.text}>
							Agashop is a professional proxy shopping and delivery service that specialises in shopping on behalf of our clients. We help our clients identify their their needs
							then purchase and deliver it for them swiftly. Unlike traditional ecommerce companies, we do not limit our customers to a set of products or shopping centers. Rather,
							 we offer our clients the flexibility to choose both the product and their preferred shopping centerif they want.
					</Typography>
				</Grid>
			</Grid>
}
export default Info