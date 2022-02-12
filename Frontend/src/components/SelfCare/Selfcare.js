import React, { useRef, useState } from 'react'
import style from './Selfcare.module.scss'
import arrow from '../../assets/arrow.png'
import ScrollIntoView from 'react-scroll-into-view'
import CanvasDraw from "react-canvas-draw";
function Selfcare() {

    const [place, setPlace] = useState(0)
    const [ans, setAns] = useState(false)
    const [color, setColor] = useState("black");
    const [size, setSize] = useState(2)
    const canvas = useRef(null);
    const arr = [
        [
            'Listen to Music',
            'Talk to Friends',
            'Read A Book',
            'Clean your Home',
            'Cook something you like'

        ],
        [
            'Water some plants',
            'Go on a small Walk',
            'Visit a temple near by',
            'Visit a garden'
        ]
    ]

    return (
        <div className={style.wrapper}>
            <div className={style.h1} >
                <div className={style.details}>
                    <div className={style.head}>Time to begin your</div>
                    <div className={style.subHead}>Self Care journey</div>
                    <ScrollIntoView selector="#h2">
                        <div className={style.btn}>Get Started</div>
                    </ScrollIntoView>
                </div>

            </div>
            <div className={style.h2} >
                <div className={style.details} id='h2'>
                    <div className={style.head}>Why Self-Care?</div>
                    <div className={style.para}>
                        <span>
                            Things have been difficult, ever since the covid. People lost their jobs and livelihood. With such tough situations, often forget about our wellbeing!
                        </span>
                        <span>
                            It is scientifically proven that self care is essential to keep your mind and body healthy.
                        </span>
                        <span>
                            It can take as little as 5 minutes to uplift your mind and body. At the end of the day, your health is all that matters!
                        </span>
                        <div>
                            <div>
                                Are you Ready?
                            </div>
                            <ScrollIntoView selector="#h3">

                                <div>
                                    <img src={arrow} />
                                    <div> Get Started</div>
                                </div>
                            </ScrollIntoView>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.h3} >
                <div className={style.head} id='h3'>What we have for your Self Care?</div>
                <div className={style.h3Wrapper}>
                    <div className={style.left}>
                        <div className={style.head}>
                            Find your next Self Care
                            Activity!
                        </div>
                        <div className={style.para}>
                            <div>
                                Based on the amount of time you have and activity location, We will provide a self-care activity for you to complete!
                            </div>
                            <div>
                                It is fast, flexible, and efficient.
                            </div>

                        </div>
                        <ScrollIntoView selector="#h4">

                            <div className={style.btn}>
                                <img src={arrow} />
                                <div> Let’s Find Out!</div>
                            </div>
                        </ScrollIntoView>


                    </div>
                    <div className={style.right}>
                        <div className={style.head}>
                            Time to Destress by
                            Doodle
                        </div>
                        <div className={style.para}>
                            <div>
                                You can doodle in your browser, reflect in a typed journal entry, save your work and get a random prompt.
                            </div>
                            <div>
                                Helps to concentrate.
                            </div>
                        </div>
                        <ScrollIntoView selector="#h5">
                            <div className={style.btn}>
                                <img src={arrow} style={{ transform: 'scaleX(-1)' }} />
                                <div style={{ paddingLeft: "30px" }}> Go Doodle!</div>
                            </div>
                        </ScrollIntoView>
                    </div>
                </div>

            </div>
            <div className={style.h4} >
                <div className={style.details} id='h4'>
                    <div className={style.head}>Find out your Self Care Activity!</div>
                    {!ans ?
                        <>
                            <div className={style.para}>
                                <div>
                                    <div>
                                        I can spend:
                                    </div>
                                    <div>
                                        <div>5-10 mins</div>
                                        <div>10-30 mins</div>
                                        <div>30-60 mins</div>
                                        <div>60+ mins</div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        Location:
                                    </div>
                                    <div>
                                        <div onClick={() => setPlace(0)}>Indoors</div>
                                        <div onClick={() => setPlace(1)}>Outdoors</div>
                                        <div onClick={() => setPlace(0)}>No Preference</div>
                                    </div>
                                </div>

                            </div>
                            <div className={style.btn} onClick={() => {
                                setAns(arr[place][parseInt(Math.random() * arr[place].length)])

                            }}>Show Activity</div>
                        </>
                        :
                        <>
                            <div className={style.para}>
                                <div style={{
                                    background: "#0B3954",
                                    borderRadius: "20px",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "300px"
                                }}>
                                    {ans}
                                </div>

                            </div>
                            <div className={style.btn} onClick={() => setAns(false)}>Try Again</div>
                        </>
                    }

                </div>
            </div>

            <div className={style.h5}>
                <div className={style.details}>
                    <div className={style.head} id="h5">Destress by DOODLE!</div>
                    <div className={style.subHead}><span style={{ fontWeight: "bold" }}>Prompt:</span> What is your favorite memory from school or with your family?</div>
                    <div className={style.canvas}>
                        <div className={style.tools}>
                            <i class="fas fa-paint-brush" onClick={() => setColor("black")}></i>
                            <i class="fas fa-eraser" onClick={() => setColor("white")}></i>
                            <div style={{
                                width: "15px",
                                height: "15px",
                                borderRadius: "50%",
                                background: "grey"
                            }}
                                onClick={() => setSize(2)}
                            ></div>
                            <div style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                background: "grey"
                            }}
                                onClick={() => setSize(6)}
                            ></div>
                            <i class="fas fa-trash-alt" onClick={() => {
                                canvas.current.clear()
                            }}></i>
                        </div>
                        <div className={style.border}>

                            <CanvasDraw
                                ref={canvas}
                                hideGridX={true}
                                hideGridY={true}
                                catenaryColor={"transparent"}
                                brushColor={color}
                                brushRadius={size}
                                canvasHeight={400}
                                canvasWidth={700}

                            />
                        </div>
                    </div>
                    <div className={style.feel}>
                        <textarea placeholder='Reflect your feelings' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selfcare