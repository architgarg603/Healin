import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DetailsAccordions from './detailsAccordian';
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

export default function ListAccordions({ Records }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={classes.root}>
            {Records.map((data, idx) => {

                return (
                    <Accordion key={idx} className={classes.accordian} expanded={expanded === data.id} onChange={handleChange(data.id)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={classes.icon} />}
                        >
                            <Typography className={classes.heading}>{data.date}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DetailsAccordions data={data} />
                        </AccordionDetails>
                    </Accordion>
                )

            })}

        </div>
    );
}
