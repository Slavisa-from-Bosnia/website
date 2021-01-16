import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import image1 from './static/max-duzij-NhG05ImWSIo-unsplash.jpg';
import CssBaseLine from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover'
  }

}));
export default function App () {
  const classes = useStyles();
  return(
  <div className ={classes.root}>
    <CssBaseLine/>
  </div>
  );
}