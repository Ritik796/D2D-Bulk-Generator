import  { useEffect, useState } from 'react';
import style from '../../Styles/WetWaste/WetWaste.module.css';
import {  FaCheckCircle } from 'react-icons/fa'; // Font Awesome icons
import { FaCartPlus } from 'react-icons/fa6';
import * as action from '../../Action/Bullkgenerator/WetWasteAction'
import * as common from '../Common/commonservice'
import { ToastContainer } from "react-toastify";

const WetWaste = ({pageData,setPageData}) => {
const [weight,setWeight] = useState('');

useEffect(()=>{
if (pageData.data) {
    action.setData(pageData.data,setWeight)
}
// eslint-disable-next-line
},[pageData.data])
const handleChange = (value)=>{
    action.handleOnChange(value,setWeight)
}
const handleNext  =()=>{

    if (!weight || isNaN(weight)) {
        console.log('alert')
        common.setAlertMessage("error","Please enter a valid weight greater than 0.");
        return;
    }

    action.handleNext(weight,setPageData)
}

    return (
        <div className={`${style.container}`}>
            <div className={`${style.centerWrapper}`}>
                <div className={style.circle}>
                    <div className={style.circleText}>
                        <span className={style.kgValue}>{weight?weight:'0'}</span>
                        <span className={style.kgLabel}>Kilogram</span>
                    </div>
                </div>

                <div className={style.inputContainer}>
                    <input
                        type="number"
                        placeholder="Enter weight"
                        className={style.inputBox}
                        value={weight}
                        onChange={(e)=>handleChange(e.target.value)}
                    />
                </div>
            </div>
             <div className={style.buttonContainer}>
                    <button className={style.button}>
                        <FaCartPlus className={style.icon} />
                        Add bin
                    </button>
                    <button className={style.buttonPrimary} onClick={handleNext} >
                        <FaCheckCircle className={style.icon} />
                        Done
                    </button>
                </div>
                <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    )
}

export default WetWaste
