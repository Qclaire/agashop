import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from "@material-ui/core/Typography"
import books from '../images/books.jpg';
import image1 from '../images/plain.jpg';
import fruits from "../images/fruits.jpg"
import electronics from "../images/electronics.jpg"
import fashion from "../images/fashion.jpg"
import food from "../images/food.jpg"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: "#06B3D0", 
  },
  titleBar: {
    background:
      'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.2) 100%)',
  },
  tile:{
    animation: `autoScroll 3000ms linear 0ms infinite right`,
    
  },
  "@keyframes autoScroll": {
    "0%": {
        marginLeft: "-400px"
    },
    "100%": {
        marginLeft: "800px"
    }
  },

}));



 const tileData = [
   {
     img: electronics,
     title: 'Electronics',
  },
  {
    img: fashion,
    title: 'Fashion',
 },
 {
  img: fruits,
  title: 'Fruits and Vegetables',
},
 {
    img: food,
    title: 'Food Stuffs',
 },
 {
    img: books,
    title: 'Books and Stationary',
 },
 

  ];
 
export default function SingleLineList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5} spacing={6}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} className={classes.tile}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={<Typography variant="h6">{tile.title}</Typography>}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
