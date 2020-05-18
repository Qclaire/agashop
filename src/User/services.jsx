import React from "react";
import {Grid, Typography, } from "@material-ui/core"
import {ShoppingCart, LocalShipping} from "@material-ui/icons"
import {makeStyles} from "@material-ui/styles"
import wave from "../images/wave.svg"


const useStyles = makeStyles(theme=>({
    services:{
        minWidth: "100vw",
        padding: "5% 5% 16% 5%",
        position: "relative",
        minHeight: "50vh",
        backgroundColor: "white",
        backgroundImage: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize:"contain"
    
    },
    card:{
        position: "relative",
        padding: "2%",

        
        
        
    },
    label:{
        color: "#06B3D0",
    },
    details:{
        textAlign: "justify"

    },
    icon:{
        color: "#06B3D0",
        height: "50px",
        width: "50px",
        margin: "auto auto"
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

const services =  [
    {
        title: "Proxy Shopping",
        icon: ShoppingCart,
        text: "Our custmers are busy people who also need their gloceries and other shopping needs met for them. We go shopping for you while you focus on productivity or simply have some fun. Give us your shopping list and where to deliver it. Then relax, we will bring it"
    },
    {
        title: "Delivery Service",
        icon: LocalShipping,
        text: "Whether you have placed an order with us or you simply want us to pick up item from one city to another, or just within  Accra. Simply let us know what and where to deliver it. Then go back to work. We will deliver according to your instructions"
    },
    {
        title: "Proxy Shopping",
        icon: ShoppingCart,
        text: "Our custmers are busy people who also need their gloceries and other shopping needs met for them. We go shopping for you while you focus on productivity or simply have some fun. Give us your shopping list and where to deliver it. Then relax, we will bring it"
    },
    {
        title: "Delivery Service",
        icon: LocalShipping,
        text: "Whether you have placed an order with us or you simply want us to pick up item from one city to another, or just within  Accra. Simply let us know what and where to deliver it. Then go back to work. We will deliver according to your instructions"
    },
    
]

const Services = props =>{

    const styles = useStyles()


    return <Grid container spacing={0} dirction="column" className={styles.services} id="our-services">
                <Grid  xs={12} className={styles.title} item>
					<Typography variant="h4">Our Services</Typography>
				</Grid>

                {
                    services && services.map(service=>{
                        return <Grid item xs={12} sm={6} md={4} lg={3} className={styles.card}>
                                {/* ICON */}
                                <service.icon className={styles.icon}/>

                                {/* TITLE */}
                                <Typography variant="h6" className={styles.title}>{service.label}</Typography>
                                
                                {/*  THE DETAILS */}
                                <Typography variant="body2" className={styles.details}>{service.text}</Typography>

                        </Grid>
                    })
                }
    </Grid>
}

export default Services;