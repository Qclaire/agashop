import React, {} from "react"

import {makeStyles} from "@material-ui/styles"
import Hero from "./hero.js"
import Info from "./info.js"
import Benefits from "./benefits.js"
import Order from "./order.js"
import Footer from "./footer.jsx"
import Services from "./services.jsx"
import Contact from "./contact.js"
import Parallax from "./parallax.jsx"
import SingleLineList from "./singlelinelist.jsx"
import ImageGrid from "./imagegrid.jsx"
import CopyRight from "./copyright.jsx"
const useStyles = makeStyles(theme=>({
	root:{
		width: "100vw",
		overflowX: "hidden"
	}
}))
const UserFace = props=>{
	const styles = useStyles();
	return (
		<div className={styles.root}>
			 <Hero />
			 <SingleLineList />
			<Info />
			<Services />
			
			<ImageGrid />
			<Parallax />
			<Order />
			<Benefits />
			<Contact /> 
			<Footer />
			{/* <Parallax /> */}
		</div>
		)

}

export default UserFace;