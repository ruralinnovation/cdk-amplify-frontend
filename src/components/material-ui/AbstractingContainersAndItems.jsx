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

const Container = props => <Grid container  spacing={4} { ...props } />;
const Item = props => <Grid item  xs={12} sm={9} md={6} { ...props } />;

const AbstractingContainersAndItems = withStyles(styles) (({ classes, justify }) => (
    <div className={classes.root}>
        <h3>Abstract Container (Grid) with abstract component Items (Grids)</h3>
        <Container>
            <Item>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-between">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Item>
            <Item>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-between">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Item>
            <Item>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-between">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Item>
            <Item>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-between">
                        <Chip label="xs=12" />
                        <Chip label="sm=9" />
                        <Chip label="md=6" />
                    </Grid>
                </Paper>
            </Item>
        </Container>
    </div>
));

export default AbstractingContainersAndItems;
