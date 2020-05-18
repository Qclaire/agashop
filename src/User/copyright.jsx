import React from "react"
import CopyrightOutlined from "@material-ui/icons/CopyrightOutlined"
import {Grid, Typography, Link} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles(theme=>({
    copyright:{
        color: "#06B3D0",
        fontSize: "2.3em",
        
    },
    container:{
        margin: "auto auto",
        textAlign: "center"
    }
}))


const CopyRight = props =>{
    const styles = useStyles();


    return <Grid container direction="row" className={styles.copyright}>
            <div className={styles.container}>
                <Typography>Powered by Kostech Technologies</Typography>
                <Typography><Link href="mailto:quaby.claire@gmail.com">quaby.claire@gmail.com</Link></Typography>
                <Typography> <CopyrightOutlined/>{(new Date()).getFullYear()} Kosteck Tecnologies. All rights reserved</Typography>
            </div>
    </Grid>
}

export default CopyRight;