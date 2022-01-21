import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import config from '../../../config';
import { getAccessToken } from '../../../utils/symbl/utils'

import CallEnd from '@material-ui/icons/CallEnd';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';

import useSymblContext from "../../../hooks/useSymblContext/useSymblContext";
import axios from '../../../axios';

const useStyles = makeStyles((theme) =>
    createStyles({
        fab: {
            margin: theme.spacing(1),
        },
    })
);

const disconnect = async (room, stopSymblWebSocketApi, isConnected) => {
    if (isConnected) {
        await stopSymblWebSocketApi(() => {
            room.disconnect();
            if (!window.location.origin.includes('twil.io')) {
            }
        });
    } else {
        room.disconnect();
        if (!window.location.origin.includes('twil.io')) {
        }
    }

    let trans = JSON.parse(localStorage.getItem("trans"))
    let url = 'https://api-labs.symbl.ai/v1/process/text'
    let token = await getAccessToken({ appId: process.env.REACT_APP_SYMBL_APP_ID, appSecret: process.env.REACT_APP_SYMBL_APP_SECRET })
    token = "Bearer " + token.accessToken
    console.log(token);
    let arr = trans.map(data => {
        let obj = {
            "payload": {
                "content": data.text
            }
        }
        return obj
    })
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    var data = {
        method: "POST",
        headers: headers,
    };
    data['body'] = JSON.stringify({ "messages": arr });
    var request = new Request(url, data);
    fetch(request)
        .then(response => {
            console.log('response', response);
            if (response.status >= 200 && response.status < 400) {
                return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(response => {
            console.log('Success', response.conversationId);
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            let obj = {
                jwt: localStorage.getItem("token"),
                id: response.conversationId,
                trans: trans,
                date: today,
                notes: localStorage.getItem("notes") || "",
                name: localStorage.getItem("name") || ""
            }
            axios.post('/progress/addprogress', obj).then(data => {
                console.log(data)
                localStorage.setItem("notes", "");
                window.location = config.appBasePath || "/";
            }).catch(err => {
                console.log(err)
            })
        }).catch(error => {
            console.error(error);
        });


};

export default function EndCallButton() {
    const classes = useStyles();
    const { room } = useVideoContext();
    const { stopSymblWebSocketApi, isConnected } = useSymblContext()

    return (
        <Tooltip title={'End Call'} onClick={() => disconnect(room, stopSymblWebSocketApi, isConnected)} placement="top"
            PopperProps={{ disablePortal: true }}>
            <Fab className={classes.fab} style={{ backgroundColor: 'darkred', color: 'white' }}>
                <CallEnd />
            </Fab>
        </Tooltip>
    );
}
