import React from 'react'
import style from './Homepage_Card.module.css'
function Homepage_Card({data}) {
    return (
        <div className={style.card}>
           <img src={data.img} className={style.img} />
           <div className={style.head}>{data.head}</div>
           <div className={style.msg}>{data.content}</div>
        </div>
    )
}

export default Homepage_Card
