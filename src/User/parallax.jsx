import React from "react";
import {Grid, Typography, Container} from "@material-ui/core"
import mall from "../images/mall.jpg"
import {makeStyles} from "@material-ui/styles"


const useStyle =  makeStyles(theme=>({
    parallax:{
        
        height: "100vh",
        minWidth: "100vw",
        backgroundImage: `url(${mall})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        

    },
    container:{
        position: "relative",
        background: "rgba(190, 20, 45, 0.3)",
        height: '100%',
        top: "0",
        margin: "auto auto",        
    },
    content:{
        height: "100%",
        width: "100%",
        position: "relative",
        margin: "auto auto",

    },
    title:{

    }
}));

const Parallax = props =>{
    const styles =  useStyle();


    return <div className={styles.parallax}>
                <div xs={12} item className={styles.container}>
                    <div className={styles.content}>
                        
                    </div>
                </div>
            </div>
}

export default Parallax;
