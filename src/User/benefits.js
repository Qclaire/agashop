import React from "react"
import {Grid, Card, CardMedia, CardContent, CardActionArea, Typography,} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import bg from "../images/texture.jpg"
import secure from "../images/secure.svg"
import convenient from "../images/convenient.svg"

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
		
		backgroundImage: `url(${secure})`,
		backgroundSize: "100% 100%",
		backgroundPosition: "center",
		height: "200px"
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
			title:"Flexibility",
			image:bg,
			info:"Lorem Sit aspernatur labore vel rem, adipisci commodi odit eum vitae asperiores, esse, ipsum iure cupiditate quibusdam officiis laboriosam neque placeat sint, totam!"
		},
		{
			title:"Flexibility",
			image:bg,
			info:"Lorem Sit aspernatur labore vel rem, adipisci commodi odit eum vitae asperiores, esse, ipsum iure cupiditate quibusdam officiis laboriosam neque placeat sint, totam!"
		},
		{
			title:"Flexibility",
			image:bg,
			info:"Lorem Sit aspernatur labore vel rem, adipisci commodi odit eum vitae asperiores, esse, ipsum iure cupiditate quibusdam officiis laboriosam neque placeat sint, totam!"
		},
		{
			title:"Flexibility",
			image:bg,
			info:"Lorem Sit aspernatur labore vel rem, adipisci commodi odit eum vitae asperiores, esse, ipsum iure cupiditate quibusdam officiis laboriosam neque placeat sint, totam!"
		},
		{
			title:"Flexibility",
			image:bg,
			info:"Lorem Sit aspernatur labore vel rem, adipisci commodi odit eum vitae asperiores, esse, ipsum iure cupiditate quibusdam officiis laboriosam neque placeat sint, totam!"
		},
		{
			title:"Flexibility",
			image:bg,
			info:"Lorem Sit aspernatur labore vel rem, adipisci commodi odit eum vitae asperiores, esse, ipsum iure cupiditate quibusdam officiis laboriosam neque placeat sint, totam!"
		},
		{
			title:"Flexibility",
			image:bg,
			info:"Lorem Sit aspernatur labore vel rem, adipisci commodi odit eum vitae asperiores, esse, ipsum iure cupiditate quibusdam officiis laboriosam neque placeat sint, totam!"
		},
		{
			title:"Flexibility",
			image:bg,
			info:"Lorem Sit aspernatur labore vel rem, adipisci commodi odit eum vitae asperiores, esse, ipsum iure cupiditate quibusdam officiis laboriosam neque placeat sint, totam!"
		},
		

	]
	

	return <Grid container spacing={8} direction="row" className={styles.container} id="pros">		
				<Grid  xs={12} className={styles.title} item>
					<Typography variant="h4">Why Choose Us?</Typography>
				</Grid>
								
				{ items && items.map(obj=>{
					return <Grid item xs={12} sm={6} lg={3}>
					<Grid container direction="row" className={styles.card}>
						<Grid item xs={12} className={styles.icon}>
							
						</Grid>
						<Grid item xs={12} className={styles.text}>
							<Typography variant="body2">{obj.info}</Typography>
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