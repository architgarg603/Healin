import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import { getAccessToken } from '../../utils/symbl/utils';
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
    const [pData, setPData] = useState([])

    const getSymbl = async (id, record) => {
        let token = await getAccessToken({ appId: process.env.REACT_APP_SYMBL_APP_ID, appSecret: process.env.REACT_APP_SYMBL_APP_SECRET })
        token = ("Bearer " + token.accessToken);
        let data = await axios.get(`https://api.symbl.ai/v1/conversations/${id}/messages?summary=true&sentiment=true`, {
            headers: {
                Authorization: token
            }
        })
        let arr = data.data.messages
        let senti = 0;
        let summery = ""
        for (let i = 0; i < arr.length; i++) {

            if (arr[i].sentiment.suggested == 'negetive') {
                senti--;
            } else if (arr[i].sentiment.suggested == 'positive') {
                senti++;
            }
            summery += " " + arr[i].text
        }
        senti /= arr.length
        let allLis = record.transcript.map(x => <li key={x.id}>{x.text}</li>)
        let ul = <ul>{allLis}</ul>
        setPData([...pData,
        { name: "Sentiment", val: (senti > 0 ? "Positive" : (senti == 0 ? "Neutral" : "Negetive")) },
        { name: "Summary", val: summery },
        { name: "Notes", val: record.notes },
        { name: "Transcript", val: ul }])


    }

    useEffect(() => {
        if (data?.id)
            getSymbl(data.id, data)
    }, [data])


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
