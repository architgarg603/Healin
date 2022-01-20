import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import ListAccordions from './ListAccordian';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    accordian: {
        backgroundColor: "white",
        color: "black"
    },
    heading: {
        color: "black",
        fontWeight: "bold",
        fontSize: "large",
        flexBasis: '33.33%',
        flexShrink: 0,
        marginLeft: "20px",
        display: "flex",
        alignItems: "center"
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),

    },
    icon: {
        color: "black",
        fontSize: "xx-large"
    }
}));

export default function ControlledAccordions({ patientList }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {patientList.map((data, idx) => {

                return (
                    <Accordion key={idx} className={classes.accordian} expanded={expanded === data.name} onChange={handleChange(data.name)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={classes.icon} />}
                        >
                            <Avatar src={data.img} />
                            <Typography className={classes.heading}>{data.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListAccordions Records={data.call}/>
                        </AccordionDetails>
                    </Accordion>
                )

            })}

        </div>
    );
}
