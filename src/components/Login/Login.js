import React from 'react'
import style from './Login.module.css'
import c1 from '../../assets/Login/c1.png'
import c2 from '../../assets/Login/c2.png'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <div className={style.detail} >
                    <div className={style.head}>Don't have an Account?</div>
                    <div className={style.subHead}>Make an account now</div>
                    <Link to='/signup'  style={{textDecoration:"none"}}>
                        <div className={style.loginBtn} style={{textDecoration:"none"}}>Signup</div>
                    </Link>
                </div>
                <img src={c1} className={style.c1} />
                <img src={c2} className={style.c2} />
            </div>
            <div className={style.right}>
                <div className={style.rightWrapper}>
                    <div className={style.subHead} style={{ color: "black", fontWeight: 'bold' }}>Hello Again!</div>
                    <div className={style.subsubHead}>Welcome Back</div>
                    <input className={style.email} placeholder='Email' />
                    <input type="password" className={style.password} placeholder='Password' />
                    <div className={style.submitBtn}>Login</div>
                    <div className={style.forgot}>Forgot Password</div>
                </div>
            </div>
        </div>
    )
}

export default Login
