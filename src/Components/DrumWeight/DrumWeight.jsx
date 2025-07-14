import { useEffect, useState } from 'react';
import style from '../../Styles/DrumWeight/DrumWeight.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { GoTrash } from "react-icons/go";
import { FaWeightScale } from 'react-icons/fa6';
import * as action from '../../Action/Bullkgenerator/DrumWeightAction';
import * as common from '../Common/commonservice'
import { ToastContainer } from "react-toastify";
import { useToastMessage } from '../Common/ToastContainer/ToastContext';

const DrumWeight = ({ pageData, setPageData }) => {
    const [weight, setWeight] = useState(0);
    const [drumWeight, setDrumWeight] = useState(0);
        let { showToastMessage } = useToastMessage();
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

        if (!drumWeight || isNaN(drumWeight)) {
           showToastMessage("error", "Please enter a valid drum weight greater than 0.");
            return;
        }

        action.handleNext(weight, drumWeight, setPageData)
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
                    <GoTrash className={style.labelIcon} />
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
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default DrumWeight;
