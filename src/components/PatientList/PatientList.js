import React, { useEffect, useState } from 'react';
import ControlledAccordions from '../Accordian/Accordian';
import style from './PatientList.module.css'
import dp from '../../assets/profile.png'
import axios from '../../axios';
import { useHistory } from 'react-router-dom';
function PatientList() {

    const [pList, setPList] = useState([])
    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token)
            history.pushState("/login")

        axios.post("/user/getuser", { "jwt":token }).then(data => {
            let obj = data.data.data[0];
           localStorage.setItem("dName",obj.name)
        }).catch(err => {
            console.log(err);
        })

    },[])

    const check = (arr,name)=>{
        let isPresent = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i].name == name)return
        }
        arr.push({
            name: name,
            img: dp,
            call: []
        })
    }


    useEffect(() => {
        axios.post('/progress/getprogress', {
            jwt: localStorage.getItem("token")
        }).then(data => {
            let arr = (data.data.data);
            let records = [];
            for (let key in arr) {
                let obj = {
                    name: key,
                    img: dp,
                    call: arr[key].map(x => {
                        return {
                            id: x.id,
                            date: x.date,
                            transcript: x.trans,
                            notes: x.notes,
                            summary: "suuuuuuuuuuuuuuuuuuuuuu",
                            Sentiment: "sentiiiiiiiiiiiiiiiiiiiii"
                        }
                    })
                }
                records.push(obj)
            }
           check(records,"Lilli")
           check(records,"Sanzz")
           check(records,"Nishhhh")
           check(records,"Archit")
            setPList(records);
        }).catch(err => {
            console.log(err);
        })
    }, [])



    return (
        <div className={style.wrapper}>
            <div className={style.head}>Patient List</div>
            <ControlledAccordions patientList={pList} />

        </div>
    );
}

export default PatientList;
