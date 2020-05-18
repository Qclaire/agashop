import React from "react"
import {Grid, Card, CardMedia, CardContent, CardActionArea, Typography,} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import cheap from "../images/cheap.svg"
import secure from "../images/secure.svg"
import convenient from "../images/convenient.svg"
import delivery from "../images/delivery.svg"
import safe from "../images/safe.svg"
import quality from "../images/quality.svg"

const useStyles = makeStyles(theme=>({
	container:{
		padding:"5%",
		minHeight: "50vh",
		zIndex: "100",
		margin: "auto auto",
		backgroundColor: "#00BCD4",
		color: "white"
	},
	icon:{
		backgroundSize: "100% 100%",
		backgroundPosition: "center",
		height: "200px",
	},
	text:{
		fontSize: "1.3em",
		textAlign: "justify",
		lineHeight: "100%"
	},
	conv:{
		backgroundImage: `url(${convenient})`
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
}))

const Benefits = props=>{
	const styles = useStyles()
	const items = 
	[
		{
			title:"Reliability",
			image:secure,
			info:"Agashop finds the best products from sources you can trust at relatively cheaper prices than anyone can get due to our partnership with several suppliers including shopping outlets, producers, distibutors and dealers of all kinds. We idenfy the best option for you everytime"
		},
		{
			title:"Fast Delivery",
			image:delivery,
			info:"We boast a ten-hour maximum delievery time even for the most obscure locations within Accra to find and deliver to your door steps. Even products sourced outside Accra should arrive on average 72hrs after order is confirmed. With us you can get the swiftest service available"
		},
		{
			title:"Flexibility",
			image:convenient,
			info:"Agashop offers you the chance to control what you buy online, not what we think you should buy. You decide what you buy and which shop you want to get it from and Agashop does the rest of the work on your behalf. All you have to do is sit back and receive your product!"
		},
		{
			title:"Flexibility",
			image:cheap,
			info:"With our strong partnership with merchants and dealers across the country, we ensure that you get the cheapest prices on the market without compromising quality. We can assure you value of value for money and shield you from the arrows of harsh pricing in the open market"
		},
		{
			title:"Qaulity Assurance",
			image:quality,
			info:"From one year of experience shopping for others, Agashop has developed the eye for quality and originality in our products. We can guarantee that all products dispatched by our agents and partners are genuine and of the highest quality available on the market."
		},
		{
			title:"Confidence in shopping",
			image:safe,
			info:"When you arrive in an unfamiliar city, it's common for sellers to exploit your vulnerability. That's why we provide safety and reliability by sending you an agent to lead you on your shopping expedition. Our agents are trianed and selected from the local area."
		},		

	]
	

	return <Grid container spacing={8} direction="row" className={styles.container} id="pros">		
				<Grid  xs={12} className={styles.title} item>
					<Typography variant="h4">Why Choose Us?</Typography>
				</Grid>
								
				{ items && items.map(obj=>{
					return <Grid item xs={12} sm={6} lg={4}>
					<Grid container direction="row" className={styles.card}>
						<Grid item xs={12} className={styles.icon} style={{backgroundImage: `url(${obj.image})`}}>
							
						</Grid>
						<Grid item xs={12} className={styles.text}>
							<Typography variant="body1">{obj.info}</Typography>
						</Grid>
					</Grid>
				</Grid>
				})
				}
						

			</Grid>
}

const MediaCard = props =>{

  return (
    <Card className={'classes.card'}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.obj.title}
          height="50%"
          image={props.obj.image}
          title={props.obj.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.obj.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.obj.info}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default Benefits