import { useEffect, useState } from 'react';
import style from '../../Styles/WetWaste/WetWaste.module.css';
import { FaCheckCircle } from 'react-icons/fa'; // Font Awesome icons
import { IoTrashOutline } from "react-icons/io5";
import * as action from '../../Action/Bullkgenerator/WetWasteAction';
import * as common from '../Common/commonservice';
import { ToastContainer } from "react-toastify";

const WetWaste = ({ pageData, setPageData, collectorWasteReport, setCollectorWasteReport }) => {
    const [weight, setWeight] = useState('');
    const [binAdded,setBinAdded] = useState(false);

    useEffect(() => {
        if (pageData.data) {
            action.setData(pageData.data, setWeight,setBinAdded);
        }
        // eslint-disable-next-line
    }, [pageData.data]);
    const handleChange = (value) => {
        action.handleOnChange(value, setWeight,setBinAdded);
    };
    const handleNext = () => {

        if (!weight || isNaN(weight)) {
            common.setAlertMessage("error", "Please enter a valid weight greater than 0.");
            return;
        }

        action.handleNext(weight, setPageData);
    };
    const handleAddBin = () => {
        action.addBin(weight,collectorWasteReport,setBinAdded,setPageData,pageData);
    };
    return (
        <div className={`${style.container}`}>
            <div className={`${style.centerWrapper}`}>
                <div className={style.circle}>
                    <div className={style.circleText}>
                        <span className={style.kgValue}>{weight ? weight : '0'}</span>
                        <span className={style.kgLabel}>Kilogram</span>
                    </div>
                </div>

                <div className={style.inputContainer}>
                    <input
                        type="number"
                        placeholder="Enter weight"
                        className={style.inputBox}
                        value={weight}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button} onClick={() => handleAddBin()}>
                    <IoTrashOutline color='green' size={21} className={style.icon}  />
                    Add bin
                </button>
                <button className={`${style.buttonPrimary} ${binAdded?'':style.disabledBtn}`} disabled={!binAdded} onClick={handleNext} >
                    <FaCheckCircle className={style.icon} />
                    Done
                </button>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default WetWaste;
