import React, { useState } from 'react';
import Header from '../../Components/Common/Header/Header';
import style from '../../Styles/DrumWeight/DrumWeight.module.css';
import { FaCheck, FaHotTub, FaTimes, FaTint, FaCheckCircle } from 'react-icons/fa';
import { FaBox, FaDrum, FaWeightScale} from 'react-icons/fa6';

const DrumWeight = () => {
    const [value, setValue] = useState(0);

    const increase = () => setValue(prev => Number(prev) + 1);
    const decrease = () => setValue(prev => Math.max(Number(prev) - 1, 0));

    return (
        <div className={style.container}>
            <Header title="Wet Waste" />

            <label className={style.labelWithIcon}>
                <FaWeightScale className={style.labelIcon} />
                Weight calculation (kg)
            </label>

            <div className={style.inputGroup}>
                <button className={style.iconButton} onClick={decrease}>−</button>
                <input
                    type="number"
                    className={style.numberInput}
                    value={value}
                    onChange={(e) => setValue(Math.max(0, parseInt(e.target.value) || 0))}
                />
                <button className={style.iconButton} onClick={increase}>+</button>
            </div>

            <label className={style.labelWithIcon}>
                <FaTint className={style.labelIcon} />
                Weight calculation (kg)
                <input
                    type="number"
                    className={style.drumWeightInput}
                    value={value}
                    onChange={(e) => setValue(Math.max(0, parseInt(e.target.value) || 0 ))}
                />
            </label>

            <div className={style.buttonContainer}>
                
                    <button className={style.buttonPrimary}>
                        <FaCheckCircle className={style.icon} />
                        Done
                    </button>
                </div>

        </div>
    );
};

export default DrumWeight;
