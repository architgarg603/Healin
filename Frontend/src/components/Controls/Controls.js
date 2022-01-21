import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import EndCallButton from './EndCallButton/EndCallButton';
import ToggleAudioButton from './ToggleAudioButton/ToggleAudioButton';
import ToggleVideoButton from './ToggleVideoButton/ToggleVideoButton';
import ToggleScreenShareButton from './ToogleScreenShareButton/ToggleScreenShareButton';
import useIsUserActive from './useIsUserActive/useIsUserActive';
import useRoomState from '../../hooks/useRoomState/useRoomState';
import { Fab } from '@material-ui/core';
import NotesIcon from '@material-ui/icons/Notes';

const useStyles = makeStyles((theme) =>
    createStyles({
        fab: {
            margin: theme.spacing(1),
        },
        container: {
            display: 'flex',
            position: 'absolute',
            right: '50%',
            transform: 'translate(50%, 30px)',
            bottom: '50px',
            zIndex: 2100,
            transition: 'opacity 1.2s, transform 1.2s, visibility 0s 1.2s',
            opacity: 0,
            visibility: 'hidden',
            maxWidth: 'min-content',
            '&.showControls, &:hover': {
                transition: 'opacity 0.6s, transform 0.6s, visibility 0s',
                opacity: 1,
                visibility: 'visible',
                transform: 'translate(50%, 0px)',
            },
            [theme.breakpoints.down('xs')]: {
                bottom: `${theme.sidebarMobileHeight + 3}px`,
            },
        },
        notes: {
            position: "absolute",
            right: "0px",
            bottom: "0px",
            minWidth: '200px',
            width: '20vw',
            height: "300px",
            zIndex: "5000"
        }
    })
);

export default function Controls() {
    const classes = useStyles();
    const { roomState } = useRoomState();
    const isReconnecting = roomState === 'reconnecting';
    const isUserActive = useIsUserActive();
    const showControls = isUserActive || roomState === 'disconnected';
    const [showNotes, setShowNotes] = useState(false)
    const [notes, setNotes] = useState("")
    const onChangeHandler = (e)=>{
        setNotes(e.target.value);
        localStorage.setItem("notes", e.target.value);
    }
    return (
        <>
            <div className={clsx(classes.container, { showControls })}>
                <ToggleAudioButton disabled={isReconnecting} />
                <ToggleVideoButton disabled={isReconnecting} />
                <Fab className={classes.fab} onClick={() => setShowNotes(!showNotes)} >
                    <NotesIcon />
                </Fab>
                {roomState !== 'disconnected' && (
                    <>
                        <ToggleScreenShareButton disabled={isReconnecting} />
                        <EndCallButton />
                    </>
                )}


            </div>
            {showNotes?<textarea className={classes.notes} placeholder='Notes' value={notes} onChange={onChangeHandler} />:null}
        </>
    );
}
