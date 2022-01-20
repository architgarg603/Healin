import React, { useState } from 'react'
import style from './Signup.module.css'
import c1 from '../../assets/Login/c1.png'
import c2 from '../../assets/Login/c2.png'
import { Link, useHistory } from "react-router-dom";
import axios from '../../axios'
function Signup() {
    const history = useHistory();
    const [details, setDetails] = useState({});
    const changeHandler = (e, type) => {
        let obj = { ...details };
        obj[type] = e.target.value
        setDetails(obj)
    }

    const onSubmitHandler = async () => {
        try {
            let data = await axios.post("/user/signup", details)
            localStorage.setItem("token", data.data.token)
            history.push("/")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <div className={style.detail} >
                    <div className={style.head}>Already have an Account?</div>
                    <div className={style.subHead}>Access your account</div>
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        <div className={style.loginBtn}>Login</div>
                    </Link>
                </div>
                <img src={c1} className={style.c1} />
                <img src={c2} className={style.c2} />
            </div>
            <div className={style.right}>
                <div className={style.rightWrapper}>
                    <div className={style.subHead} style={{ color: "black", fontWeight: 'bold', marginBottom: '20px' }}>Hello</div>
                    <input className={style.name} placeholder='Full Name' value={details.name || ""} onChange={(e) => changeHandler(e, 'name')} />
                    <input className={style.email} placeholder='Email' value={details.email || ""} onChange={(e) => changeHandler(e, 'email')} />
                    <input type="password" className={style.password} placeholder='Password' value={details.password || ""} onChange={(e) => changeHandler(e, 'password')} />
                    <input type="text" className={style.password} placeholder='Phone' value={details.phone || ""} onChange={(e) => changeHandler(e, 'phone')} />
                    <div className={style.submitBtn} onClick={onSubmitHandler}>Sign up</div>
                    <div className={style.forgot}>Forgot Password</div>
                </div>
            </div>
        </div>
    )
}

export default Signup
