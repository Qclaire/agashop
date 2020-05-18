import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import books from '../images/books.jpg';
import image1 from '../images/plain.jpg';
import fruits from "../images/fruits.jpg"
import electronics from "../images/electronics.jpg"
import fashion from "../images/fashion.jpg"
import food from "../images/food.jpg"
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: "5% 0 0 0",
    backgroundColor: theme.palette.background.paper,
    minHeight: "100vh",
    backgroundColor:"#00BCD4"
  },
  gridList: {
    
    
  },
  title:{
    padding: "0 5% 5% 5%",
    float: "left",
    display: "block",
    "& *":{
    color: "#000",
    fontWeight: "900",
    float: "left",
    }

} , 
tile:{
      minHeight: "50vh",
      color: "#06B3D0",
      fontSize: "2.3em",
      padding: "5% 5%",
      width: "80%",
      "& img":{
        
      },
      "&:hover":{
          
      }
  },
  label:{
    color: "#06B3D0",
    fontSize: "2em"
}
}));



const tileData = [
    {
      img: electronics,
      title: 'Electronics',     author: 'author',
   },
   {
     img: fashion,
     title: 'Fashion',     author: 'author',
  },
  {
     img: food,
     title: 'Food Stuffs',     author: 'author',
  },
  {
     img: books,
     title: 'Books and Stationary',     author: 'author',
  },
  {
     img: fruits,
     title: 'Fruit and Veges',     author: 'author',
  },
  {
     img: image1,
     title: 'Image',     author: 'author',
  },
 
   ];
  
export default function ImageGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="products">
        <div  className={classes.title}>
					<Typography variant="h4">What can you order?</Typography>
		</div>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} className={classes.tile}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={<Typography variant="h6" className={classes.label}>{tile.title}</Typography>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
