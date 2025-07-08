import { useEffect, useState } from 'react';
import style from '../../Styles/DrumWeight/DrumWeight.module.css';
import { FaTint, FaCheckCircle } from 'react-icons/fa';
import { FaWeightScale } from 'react-icons/fa6';
import * as action from '../../Action/Bullkgenerator/DrumWeightAction';

const DrumWeight = ({ pageData, setPageData }) => {
    const [drumWeight, setDrumWeight] = useState(0);
    useEffect(() => {
        if (pageData.data) {
            action.setData(pageData.data, setDrumWeight, drumWeight)
        }
        // eslint-disable-next-line
    }, [pageData]);
    const handleChange = (value) => {
        action.handleOnChange(value, setDrumWeight)
    }
    const increase = () => setDrumWeight(prev => Number(prev) + 1);
    const decrease = () => setDrumWeight(prev => Math.max(Number(prev) - 1, 0));
    const handleNext =()=>{
        action.handleNext(drumWeight,setPageData)
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
                        value={drumWeight}
                        onChange={(e) => handleChange((Math.max(0, parseInt(e.target.value) || 0)))}
                    />
                    <button className={style.iconButton} onClick={increase}>+</button>
                </div>

                <label className={style.labelWithIcon}>
                    <FaTint className={style.labelIcon} />
                    Weight calculation (kg)
                    <input
                        type="number"
                        className={style.drumWeightInput}
                        value={drumWeight}
                        onChange={(e)=>{}}

                    />
                </label>

                <div className={style.buttonContainer}>

                    <button className={style.buttonPrimary} onClick={handleNext}>
                        <FaCheckCircle className={style.icon}  />
                        Done
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DrumWeight;
