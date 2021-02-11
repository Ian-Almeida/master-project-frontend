import React from 'react';
import { Link } from "react-router-dom";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
  }),
);

const verifyLogin = () => {
  const localAuth = (localStorage.getItem('isAuthUser') === 'true');
  const loginUserName = localStorage.getItem('username'); 

  if(localAuth) {
    return loginUserName;
  }

  return 'Login';
}

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.link}>
            <Button color="inherit">
              Página inicial
            </Button>
          </Link>
          <Link to="/home" className={classes.link}>
            <Button color="inherit">
              Master Project
            </Button>
          </Link>
          <Typography variant="h6" className={classes.title}/>
          <Link to="/login" className={classes.link}>
            <Button color="inherit"style={{color:"white"}} >{verifyLogin()}</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;