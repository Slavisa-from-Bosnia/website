import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import image1 from './static/max-duzij-NhG05ImWSIo-unsplash.jpg';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}));
export default function App () {
  const classes = useStyles();
  return(
  <div className ={classes.root}>
    <CssBaseLine/>
    <Header/>
    <PlaceToVisit/>
  </div>
  );
}