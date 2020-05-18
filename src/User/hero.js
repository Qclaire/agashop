import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Grid, IconButton, Typography, Toolbar, Button, ListItemText, List} from "@material-ui/core"
import {Menu, Phone, } from "@material-ui/icons"
import bg from "../images/bg1.jpg"
import bg1 from "../images/shopper.png"

const useStyles = makeStyles(theme=>({
	nav:{
		color:"#000",
		boxShadow: "0 0 0 0",
		background: "#fff",
		height: "80px",
		postion: "sticky",
		top: "0",
		lineHeight: "71px",
		width: "100vw",
		zIndex: "101",
		flexGrow: 1, 
		
	},
	ul:{
		listStyleType: "none",
  		margin: 0,
		padding: 0,
		float: "left"
		  
	},
	li:{
		float: "right",
		lineHeight: "100%",
	},
	a:{
		display: "block",
		padding: "8px",
		textDecoration: "none",
		fontSize: '1.5em',
		fontWeight: "900",
		color: "#000",
		// color: "#06B3D0",
	},
	icon:{
		color: "#000",
		fontSize: "1.4em",
	},
	IconButton:{
		fontSize: "2em",
		lineHeight: "750px",
		position: "relative",
		top:"0",
		display: "none"
	},
	logo:{
		position:"relative",
		fontSize:"2em",
		fontWeight: "900px",
		lineHeight: "71px",
		flexGrow: 1,

	},
	hero:{
		backgroundImage: `url(${bg})`,
		backgroundSize:"100% 100%",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		minHeight:"100vh",
		minWidth: "100vw",
		color: "white",
		textAlign: "center",
		zIndex: "0"
		

	},
	heroContent:{
		position: "absolute",
		height:"100vh",
		minWidth: "100vw",
		background: "rgba(2, 4, 6, 0.35)",
		top: "0",
		backgroundSize:"20vw 90vh",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "fixed",
		zIndex:"0",
		}

}))


const navs = [
	{title: "Contact us", url: "#contact-us"},
	{title: "Benefits", url: "#pros"},
	{title: "Order", url: "#order"},
	{title: "Products", url: "#products"},
	{title: "Our services", url: "#our-services"},
	{title: "About us", url: "#about-us"},
	
]

const Hero = props =>{

	const styles = useStyles();

	return <div  id="home">
				
				<AppBar position="fixed" className={styles.nav}>
					<Toolbar>
						<IconButton edge="start" className={styles.icon} color="inherit" aria-label="menu">
							<Menu className={styles.icon} />
						</IconButton>
						<Typography variant="h6" className={styles.logo}>
							Agashop
						</Typography>

						<ul className={styles.ul}>
							{
								navs && navs.map(item=>{
									return <li key={item.title} className={styles.li}>
												<a href={item.url} className={styles.a}>{item.title}</a>
											</li>
								})
							}
						</ul>
						
					</Toolbar>

					
					
					</AppBar>
				

				<div className={styles.hero}>
					
					<div className={styles.heroConten}>
						
					</div>

				</div>
			 </div>
}

export default Hero