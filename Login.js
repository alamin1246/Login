import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useMediaQuery } from '@material-ui/core';
import background from "../../assets/background.jpg";
import { Button } from '@material-ui/core';
import { color } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        height:"1000px",
        width:"500px",
    }
}))

export default function Login() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="row">
            <Grid item container 
            direction="column" justify="center" 
            lg={3}
            
            >
                <Grid item
                style={{marginLeft:"100px"}}
                >
                    <Typography variant="h2" style={{lineHeight:1, fontSize:30, color : "black"}}>
                        Login
                    </Typography>
                </Grid>
                <Grid item container style={{marginLeft:"100px"}}>
                    <Grid item>
                       <TextField label="Email" id="email" />
                    </Grid>
                    <Grid item>
                       <TextField label="Password" id="password" />
                    </Grid>
                </Grid>
                <Grid item container justify={matchesSM ? "center": undefined}
                style={{marginLeft:"200px", marginTop:"10px"}}>
            <Button variant="contained"
            style={{background:"blue", color:"white"}}>Login</Button> 
            </Grid>
               <Grid item style={{color:"blue", marginLeft:"200px"}} >
                   Forgot Password ?
                </Grid>     
            </Grid>
            <Grid item container alignItems="center" className={classes.background} lg={9}>
                <Grid item 
                 style={{
                     marginLeft: matchesSM ? 0 : "5em",
                     textAlign: matchesSM ? "center" : "inherit",
                      color:"white"
                    }}
                >
                    Enrolling to a new <br />
                    Course ?
                    <Grid item container justify={matchesSM ? "center": undefined}
                    style={{marginTop:"10px"}}>
            <Button variant="contained"
            style={{background:"blue", color:"white"}}>Signup</Button> 
            </Grid>
                </Grid>
            </Grid>
         
        </Grid>
    )
}