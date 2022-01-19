import { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import style from './Profile.module.css'
import img from '../../assets/profile.png'

const useStyles = makeStyles((theme) => ({
    dp: { height: "200px", width: "200px" }
}));


function Profile() {
    const classes = useStyles();
    const [editable, setEditable] = useState(true);
    const [details, setDetails] = useState({
        fname: "Archit",
        lname: "Garg",
        email: "archit@gmail.com",
        ph: "123456789"
    })


    const onChangeHandler = (e, key) => {
        let obj = { ...details };
        obj[key] = e.target.value
        console.log(obj)
        setDetails(obj)
    }


    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <Avatar src={img} className={[style.dp, classes.dp].join(" ")} />
                <div className={style.name}>Name</div>
            </div>
            <div className={style.right}>
                <div className={style.head}>Basic Information</div>
                <div className={style.name}>
                    <label>
                        First Name
                        <input type='text' className={style.fname} value={details.fname} onChange={(e) => onChangeHandler(e, "fname")} disabled={editable ? "disabled" : ""} />
                    </label>
                    <label>Last Name
                        <input type='text' className={style.lname} value={details.lname} onChange={(e) => onChangeHandler(e, "lname")} disabled={editable ? "disabled" : ""} />
                    </label>
                </div>
                <label>Email
                    <input type='email' className={style.email} value={details.email} onChange={(e) => onChangeHandler(e, "email")} disabled={editable} />
                </label>
                <label>
                    Phone Number
                    <input type='text' className={style.phone} value={details.ph} onChange={(e) => onChangeHandler(e, "ph")} disabled={editable} />
                </label>
                <div className={style.btn} onClick={() => { setEditable(!editable) }}>Edit</div>
            </div>
        </div>
    )
}

export default Profile
