import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

export default function DetailsAccordions({ data }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    let pData = [];
    for(let key in data){
        if(key == "date")continue;
        pData.push({
            name:key,
            val:data[key]
        })
    }
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {pData.map((data, idx) => {

                return (
                    <Accordion key={idx} className={classes.accordian} expanded={expanded === data.name} onChange={handleChange(data.name)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={classes.icon} />}
                        >
                            <Typography className={classes.heading}>{data.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               {data.val}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )

            })}

        </div>
    );
}
