import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 650,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: './app/images/grid-list/a.jpg',
    title: '306GTi',
  },
  {
    img: './app/images/grid-list/b.jpg',
    title: '106Rallye',
  },
  {
    img: './app/images/grid-list/c.jpg',
    title: 'Puppies',
  },
  {
    img: './app/images/grid-list/d.jpg',
    title: 'BlackJack',
  },
  {
    img: './app/images/grid-list/e.jpg',
    title: 'Teddy',
  },
  {
    img: './app/images/grid-list/f.jpg',
    title: 'Puppy',
  },
];

const Grids = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={250}
      style={styles.gridList}
    >
      <Subheader>Portfolio Examples</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Grids;
