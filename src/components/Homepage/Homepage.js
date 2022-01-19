import React from 'react'
import style from './Homepage.module.css'
import I1 from '../../assets/Landing/1.png'
import I2 from '../../assets/Landing/2.png'
import I3 from '../../assets/Landing/3.png'
import I4 from '../../assets/Landing/4.png'
import I5 from '../../assets/Landing/5.png'
import I6 from '../../assets/Landing/6.png'
import Homepage_Card from '../Homepage_Card/Homepage_Card'
function Homepage() {
    const arr = [
        { img: I1, head: "Search Doctor", content: "Choose your doctor from thousands of specialist, general, and trusted hospitals" },
        { img: I2, head: "Online Pharmacy", content: "Buy  your medicines with our mobile application with a simple delivery system" },
        { img: I3, head: "Consultation", content: "Free consultation with our trusted doctors and get the best recomendations" },
        { img: I4, head: "Detail Info", content: "Free consultation with our trusted doctors and get the best recomendations" },
        { img: I5, head: "Emergency Care", content: "You can get 24/7 urgent care for yourself or your children and your lovely family" },
        { img: I6, head: "Tracking", content: "Track and save your medical history and health data " }
    ]



    return (
        <>
            <div className={[style.wrapper, 'custom_scrollBar'].join(" ")}>
                <div style={{ background: "linear-gradient(180deg, #E1ECFF 0%, rgba(241, 246, 254, 0) 100%)" }}>
                    <div className={style.h1}>
                        <div className={style.head}>
                            Find a Doctor &#38; Book Appointment online
                        </div>
                        <div className={style.btn}> Book Now </div>
                    </div>
                </div>
                <div className={style.h2}>
                    <div className={style.subHead}>Our Services</div>
                    <div className={style.msg}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</div>
                </div>

                <div className={style.h3}>
                    {arr.map((card,idx) => <Homepage_Card data={card} key={idx} />)}
                </div>

                <div className={style.footer}></div>
            </div>
        </>
    )
}

export default Homepage
