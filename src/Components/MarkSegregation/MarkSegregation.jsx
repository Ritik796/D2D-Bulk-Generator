import { useEffect, useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCheckCircle } from 'react-icons/fa';
import { GoTrash } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { GoCheck } from "react-icons/go";
import style from '../../Styles/MarkSegregation/MarkSegregation.module.css';
import * as  action from '../../Action/Bullkgenerator/MarkSegregationAction';
import * as common from '../Common/commonservice';
import { ToastContainer } from "react-toastify";
import ModalComponent from './ModalComponent/ModalComponent';

const MarkSegregation = ({ pageData, setPageData ,collectorWasteReport,setCollectorWasteReport}) => {
    const [segregationType, setSegregationType] = useState('');
    const [isSelected, setIsSelected] = useState(false);
    const [segregationDone, setSegregationDone] = useState(false);
    const [segregationDetails, setSegregationDetails] = useState({ totalWeight: '', drumWeight: "", wasteWeight: "" });
    useEffect(() => {
        if (pageData.data) {
            handleSetData(pageData.data);
        }
        // eslint-disable-next-line
    }, [pageData.data]);
    const handleSetData = (data) => {
        action.setData(data, setSegregationType, setSegregationDetails, setIsSelected);
    };
    const handleClick = (value) => {
        action.markSegregationType(value, setSegregationType, setPageData, setIsSelected); // toggle on each click
    };

    const handleDone = () => {
        
        action.markSegregationDone(segregationType, setSegregationDone);
        // const houseId = localStorage.getItem('houseId');
        // Android.sendDataToAndroid(houseId);
        // const payload = JSON.stringify({
        //     wasteWeight: segregationDetails.wasteWeight,
        //     drumWeight: segregationDetails.drumWeight,
        //     totalWeight: segregationDetails.totalWeight,
        //     wasteType : pageData.data.wasteType,
        //     type: segregationType
        // });

        // if (window.Android?.sendDataToAndroid) {
        //     window.Android.sendDataToAndroid(payload);
        // } else {
        //     console.warn("Android bridge not available");
        // }

        // if (window.Android?.sendDataToAndroid) {

        //     window.Android.sendDataToAndroid(segregationDetails.wasteWeight, segregationDetails.drumWeight, segregationDetails.totalWeight, segregationType);
        // } else {
        //     console.warn("Android bridge not found");
        // }
        // bwgDetailSubmit.submitBWGDetails(houseId,segregationDetails.totalWeight,segregationDetails.drumWeight,segregationDetails.wasteWeight,segregationType)
        // Proceed with your logic if selection is valid
        // action.handleNext(segregationType, setPageData);
    };
    const handleAddAnotherWaste = () => {
        action.addAnotherWaste(setCollectorWasteReport,setPageData,pageData.data,segregationType,segregationDetails,setSegregationDone,setIsSelected);
    };
    const handleEndOfWeightment = () => {
        action.endOfWeightment(setCollectorWasteReport,setPageData,pageData.data,segregationType,segregationDetails,setSegregationDone,setIsSelected);
    };

    return (
        <div className={`${style.container}`}>
            <div className={`${style.weight}`}>
                <div className={`${style.weightSummary}`}>
                    <div> <span style={{ fontSize: "14px", marginLeft: "10px" }}>Total Weight - Drum Weight  = Waste Weight</span></div>
                    <div className={`${style.weightUnit}`}>Kg</div>
                </div>
                <div className={`${style.dustBin}`}>
                    <div className={`${style.dustBinItems}`}>
                        <div >
                            <IoTrashOutline className={`${style.dustBinIcon}`} size={30} />
                        </div>
                        <div className={`${style.dustBinCount}`}>
                            <span>{segregationDetails?.totalWeight || '0'}</span>
                        </div>
                        <div className={`${style.dustBinText}`}>
                            <span>Total Weight</span>
                        </div>
                    </div>
                    <div className={`${style.dustBinItems}`}>
                        <div >
                            <GoTrash className={`${style.dustBinIcon}`} size={30} />
                        </div>
                        <div className={`${style.dustBinCount}`}>
                            <span>{segregationDetails?.drumWeight || "0"}</span>
                        </div>
                        <div className={`${style.dustBinText}`}>
                            <span>Drum Weight</span>
                        </div>
                    </div>
                    <div className={`${style.dustBinItems}`}>
                        <div >
                            <IoTrashOutline className={`${style.dustBinIcon}`} size={30} />
                        </div>
                        <div className={`${style.dustBinCount}`}>
                            <span>{segregationDetails?.wasteWeight || '0'}</span>
                        </div>
                        <div className={`${style.dustBinText}`}>
                            <span>Waste Weight</span>
                        </div>
                    </div>


                </div>
            </div>
            <div className={`${style.segregation}`}>
                <div className={`${style.segregation_head}`}>
                    <span className={`${style.segregation_head_Icon}`}>
                        <LuLayoutDashboard size={26} />
                    </span>
                    <span className={`${style.segregation_head_text}`}>Mark Segregation Level</span>
                </div>
                <div className={`${style.segregation_options}`}>
                    <div>
                        <div
                            className={`${style.segregated} ${style.segregation_option_item}`}
                            onClick={() => handleClick('Segregated')}
                        >
                            <div >
                                <GoCheck size={35} color='green' className={` ${style.checkIconWrapper} ${typeof segregationType === 'string' && segregationType.trim() === 'Segregated' ? style.show : ''}`} />
                            </div>
                        </div>
                        <span className='mt-2'>Segregated</span>
                    </div>
                    <div>
                        <div className={`${style.partial} ${style.segregation_option_item} `} onClick={() => handleClick('Partial Segregated')}>
                            <div>
                                <GoCheck size={35} color='green' className={` ${style.checkIconWrapper} ${typeof segregationType === 'string' && segregationType.trim() === 'Partial Segregated' ? style.show : ''}`} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <span className='m-0'>Partial</span>
                            <span className='m-0'> Segregated</span>
                        </div>

                    </div>
                    <div>
                        <div className={`${style.mixed} ${style.segregation_option_item}`} onClick={() => handleClick('Mixed Waste')}>
                            <div>
                                <GoCheck size={35} color='green' className={` ${style.checkIconWrapper} ${typeof segregationType === 'string' && segregationType.trim() === 'Mixed Waste' ? style.show : ''}`} />
                            </div>
                        </div>
                        <span className='mt-2'>Mixed Waste</span>
                    </div>
                </div>
                <div className={`${style.segregation_btn}`}>
                    <button disabled={!isSelected} className={`${isSelected ? "" : style.disabledBtn}`} onClick={handleDone}>
                        <FaCheckCircle className={style.icon} />
                        Done</button>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} />
            <ModalComponent open={segregationDone} setOpen={setSegregationDone} handleAddAnotherWaste={handleAddAnotherWaste} handleEndOfWeightment={handleEndOfWeightment} />
        </div>
    );
};

export default MarkSegregation;