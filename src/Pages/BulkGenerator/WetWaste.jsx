import React from 'react'
import Header from '../../Components/Common/Header/Header'
import style from '../../Styles/WetWaste/WetWaste.module.css'
import { FaTimes, FaCheck, FaCheckCircle } from 'react-icons/fa' // Font Awesome icons
import { FaCartPlus, FaTrash } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

const WetWaste = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/drum'); // 👈 navigate to NextScreen
    };


    return (
        <div className={`${style.container}`}>
            <div>
                <Header title={"Wet Waste"} />
            </div>
            <div className={`${style.centerWrapper}`}>
                <div className={style.circle}>
                    <div className={style.circleText}>
                        <span className={style.kgValue}>0</span>
                        <span className={style.kgLabel}>Kilogram</span>
                    </div>
                </div>

                <div className={style.inputContainer}>
                    <input
                        type="number"
                        placeholder="Enter weight"
                        className={style.inputBox}
                    />
                </div>

                <div className={style.buttonContainer}>
                    <button className={style.button}>
                        <FaCartPlus className={style.icon} />
                        Add bin
                    </button>
                    <button className={style.buttonPrimary} onClick={handleSubmit}>
                        <FaCheckCircle className={style.icon} />
                        Done
                    </button>
                </div>

            </div>
        </div>
    )
}

export default WetWaste
