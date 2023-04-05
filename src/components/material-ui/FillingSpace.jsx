import React from 'react';
import { withStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Chip } from "@mui/material";

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

const FillingSpace = withStyles(styles) (({ classes, justify }) => (
    <div className={classes.root}>
        <h3>Grid with component grids set to "justify" contents</h3>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent={justify}>
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent={justify}>
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent={justify}>
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent={justify}>
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        <h3>Grid with component grids set to "center" contents</h3>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="center">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="center">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="center">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="center">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        <h3>Grid with component grids set to "space-around" contents</h3>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-around">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-around">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-around">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-around">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </div>
));

export default FillingSpace;
