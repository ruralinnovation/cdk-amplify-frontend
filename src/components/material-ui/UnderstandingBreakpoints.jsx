import React from 'react';
import { withStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";

const styles = theme => ({
    root: {
        textAlign: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

const UnderstandingBreakpoints = withStyles(styles) (({ classes }) => (
    <div className={classes.root}>
        <h3>Grid with "auto" screen widths</h3>
        <Grid container spacing={4}>
            <Grid item xs="auto" sm="auto" md="auto">
                <Paper className={classes.paper}>
                    xs="auto" sm="auto" md="auto"
                </Paper>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
                <Paper className={classes.paper}>
                    xs="auto" sm="auto" md="auto"
                </Paper>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
                <Paper className={classes.paper}>
                    xs="auto" sm="auto" md="auto"
                </Paper>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
                <Paper className={classes.paper}>
                    xs="auto" sm="auto" md="auto"
                </Paper>
            </Grid>
        </Grid>
        <h3>Grid with proportional (1-12/12) screen widths</h3>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    xs=12 sm=9 md=6
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    xs=12 sm=9 md=6
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    xs=12 sm=9 md=6
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    xs=12 sm=9 md=6
                </Paper>
            </Grid>
        </Grid>
    </div>
));

export default UnderstandingBreakpoints;
