import React from 'react'
import style from './Signup.module.css'
import c1 from '../../assets/Login/c1.png'
import c2 from '../../assets/Login/c2.png'
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <div className={style.detail} >
                    <div className={style.head}>Already have an Account?</div>
                    <div className={style.subHead}>Access your account</div>
                    <Link to='/login' style={{textDecoration:"none"}}>
                    <div className={style.loginBtn}>Login</div>
                    </Link>
                </div>
                <img src={c1} className={style.c1} />
                <img src={c2} className={style.c2} />
            </div>
            <div className={style.right}>
                <div className={style.rightWrapper}>
                    <div className={style.subHead} style={{ color: "black", fontWeight: 'bold', marginBottom:'20px' }}>Hello</div>
                    <input className={style.name} placeholder='Full Name' />
                    <input className={style.email} placeholder='Email' />
                    <input type="password" className={style.password} placeholder='Password' />
                    <div className={style.submitBtn}>Sign up</div>
                    <div className={style.forgot}>Forgot Password</div>
                </div>
            </div>
        </div>
    )
}

export default Signup
