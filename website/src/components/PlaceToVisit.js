import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import image2 from '../static/max-duzij-NhG05ImWSIo-unsplash.jpg';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPositon from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }

    // backgroundImage: `url(${image2})`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat'
  }
}));
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const classes = useStyles();
  const checked = useWindowPositon('header');
  return(
    <div className ={classes.root} id = 'place-to-visit' >
        <ImageCard place={places[0]} checked={checked}/>
        <ImageCard place={places[1]} checked={checked}/>
    </div>
  );
}