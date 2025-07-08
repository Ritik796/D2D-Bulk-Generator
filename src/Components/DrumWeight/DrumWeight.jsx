import { useEffect, useState } from 'react';
import style from '../../Styles/DrumWeight/DrumWeight.module.css';
import { FaTint, FaCheckCircle } from 'react-icons/fa';
import { FiTrash2 } from "react-icons/fi";
import { FaWeightScale } from 'react-icons/fa6';
import * as action from '../../Action/Bullkgenerator/DrumWeightAction';

const DrumWeight = ({ pageData, setPageData }) => {
    const [weight, setWeight] = useState(0);
    const [drumWeight, setDrumWeight] = useState(0);
    useEffect(() => {
        if (pageData.data) {
            action.setData(pageData.data, setDrumWeight, drumWeight, setWeight, weight)
        }
        // eslint-disable-next-line
    }, [pageData]);
    const handleChange = (type, value) => {
        action.handleOnChange(type, value, setWeight, setDrumWeight, setPageData)
    }
    const increase = () => {

        setWeight(prev => Number(prev) + 1);
      
    };
    const decrease = () => {
        setWeight(prev => Math.max(Number(prev) - 1, 0));
    };
    const handleNext = () => {
        action.handleNext(weight,drumWeight, setPageData)
    }
    return (
        <div className={style.container}>
            <div style={{ padding: "10px" }}>
                <label className={style.labelWithIcon}>
                    <FaWeightScale className={style.labelIcon} />
                    Weight calculation (kg)
                </label>

                <div className={style.inputGroup}>
                    <button className={style.iconButton} onClick={decrease}>−</button>
                    <input
                        type="number"
                        className={style.numberInput}
                        value={weight}
                        onChange={(e) => handleChange('weight', (Math.max(0, parseInt(e.target.value) || 0)))}
                    />
                    <button className={style.iconButton} onClick={increase}>+</button>
                </div>

                <label className={style.labelWithIcon}>
                    <FiTrash2 className={style.labelIcon} />
                    Enter Drum Weight (kg)
                    <input
                        type="number"
                        className={style.drumWeightInput}
                        value={drumWeight}
                        onChange={(e) => { handleChange('drumWeight', e.target.value) }}

                    />
                </label>


            </div>
            <div className={style.buttonContainer}>

                <button className={style.buttonPrimary} onClick={handleNext}>
                    <FaCheckCircle className={style.icon} />
                    Done
                </button>
            </div>
        </div>
    );
};

export default DrumWeight;
