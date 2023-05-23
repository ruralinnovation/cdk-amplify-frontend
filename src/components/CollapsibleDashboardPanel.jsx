import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    Collapse,
    Grid,
    IconButton, styled
} from '@mui/material';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AccessibleTable from "./AccessibleTable.class";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
    })
}));

export default function CollapsibleDashboardPanel (props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        if (!expanded && props.hasOwnProperty("onExpand") && props.onExpand.hasOwnProperty("callback")) {
            setTimeout(props.onExpand.callback, 1533);
        }
    };

    return (<>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>{
            React.Children.map(props.children, child => {
               // console.log"CollapsibleDashboardPanel child: ", child.props);
                return (child.props.hasOwnProperty("className") && child.props.className === "embedded-app") ? (
                    <Grid>
                        <Card>
                            <Collapse
                                orientation="horizontal"
                                in={expanded}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>
                                    <h1>2</h1>
                                    {child}
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ) : (
                    <Grid>
                        <Card style={{ border: "2px solid #000" }}>
                            <CardContent>
                                <h1>1</h1>
                                {child}
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                    style={{ transform: [{ rotate: "180deg" }] }}
                                >
                                    <ArrowRightIcon />
                                </ExpandMore>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        }
        </Grid>
    </>);
};
