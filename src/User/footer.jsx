import React from "react";
import {Grid, Typography, List} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import CopyRight from "./copyright.jsx"
const useStyle = makeStyles(theme=>({
    footer:{
        padding: "10px",
        marginTop: 'auto',
        backgroundColor:"#183450",
        minHeight: "50vh",
        position: "relative",
        bottom: "0",
        left: "0",
        right: "0",
        color: "white",
        padding: "10% 5%",
        margin: "auto auto",
        "& a":{
            textDecoration: "none",
            color: "white",
            display: "block",
            margin: "1em 0",
            lineHeight: "100%",
            fontSize: "1.3em",
            "&:hover":{
                textDecoration: "underline"
            }
        },
        
    },
    title:{
        fontSize: "1.3em",
        lineHeight: "100%",
        fontWeight: "900",
        color: "#06B3D0",

    }
}))


const links =  [
    {title: "Home", url:"#home"},
    {title: "About us", url:"#about-us"},
    {title: "Our Products", url:"#products"},
    {title: "Our Services", url:"#our-services"},
    {title: "Why shop with us", url:"#pros"},
    {title: "Place Order", url:"#order"},
    {title: "Contact us", url:"#contact-us"}
];

const contacts = [
    {value: "0234343345", type:"phone"},
    {value: "0250224564", type:"phone"},
    {value: "0278457754", type:"phone"},
    {value: "info@shop4me.com", type:"email"},
    

]

const Footer = props =>{
    const styles = useStyle();

    return <Grid container  direction="row" spacing={5} className={styles.footer}>
                <Grid xs={12} sm={4} item>
                    <Typography className={styles.title} variant="h5">Site Links</Typography>
                    {
                        links && links.map(link=>{
                        return <a href={link.url}>{link.title}</a>
                        })
                    }
                </Grid>
                <Grid xs={12} sm={4} item>
                    <Typography className={styles.title} variant="h5">Our Contacts</Typography>
                    {
                        contacts && contacts.map(link=>{
                        return link.type == "email" ?<a href={`mailto:${link.value}`}>{link.value}</a> :<a href={`tel:${link.value}`}>{link.value}</a>
                        })
                    }
                </Grid>

                <Grid xs={12} sm={4} item>
                    <Typography className={styles.title} variant="h5">Site Links</Typography>
                    {
                        links && links.map(link=>{
                        return <a href={link.url}>{link.title}</a>
                        })
                    }
                </Grid>
                <CopyRight />
    </Grid>
}

export default Footer;