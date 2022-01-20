import React from 'react';
import ControlledAccordions from '../Accordian/Accordian';
import style from './PatientList.module.css'
import dp from '../../assets/profile.png'
function PatientList() {

    let patientList = [
        {
            name: "Archit",
            img: dp,
            call: [
                {
                    date:"01-02-2021",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                }, {
                    date:"01-02-2022",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                },
                {
                    date:"01-02-2023",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                }
            ]
        },
        {
            name: "Lilli",
            img: dp,
            call: [
                {
                    date:"01-02-2021",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                }, {
                    date:"01-02-2022",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                },
                {
                    date:"01-02-2023",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                }
            ]
        },
        {
            name: "Nishh",
            img: dp,
            call: [
                {
                    date:"01-02-2021",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                }, {
                    date:"01-02-2022",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                },
                {
                    date:"01-02-2023",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                }
            ]
        },
        {
            name: "Sanz",
            img: dp,
            call: [
                {
                    date:"01-02-2021",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                }, {
                    date:"01-02-2022",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                },
                {
                    date:"01-02-2023",
                    transcript: "hiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    summary: "suuuuuuuuuuuuuuuuuuuuuu",
                    notes: "notesssssssssssssssssssssss",
                    Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                }
            ]
        },
      
    ]



    return (
        <div className={style.wrapper}>
            <div className={style.head}>Patient List</div>
            <ControlledAccordions patientList={patientList} />

        </div>
    );
}

export default PatientList;
