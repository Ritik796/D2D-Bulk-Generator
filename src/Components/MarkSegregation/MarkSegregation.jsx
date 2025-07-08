import { useEffect, useState } from 'react';
import { FiTrash2, FiTrash } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCheckCircle } from 'react-icons/fa';
import { GoCheck } from "react-icons/go";
import style from '../../Styles/MarkSegregation/MarkSegregation.module.css';
import * as  action from '../../Action/Bullkgenerator/MarkSegregationAction'

const MarkSegregation = ({ pageData, setPageData }) => {
    const [segregationType, setSegregationType] = useState('');
    useEffect(() => {
        if (pageData.data) {
            handleSetData(pageData.data)
        }
        // eslint-disable-next-line
    }, [pageData.data]);
    const handleSetData = (data)=>{
        action.setData(data,setSegregationType)
    }
    const handleClick = (value) => {
        action.markSegregationType(value,setSegregationType,setPageData); // toggle on each click
    };
    return (
        <div className={`${style.container}`}>
            <div className={`${style.weight}`}>
                <div className={`${style.weightSummary}`}>
                    <div> Total Weight - Drum Weight  = Waste Weight</div>
                    <div className={`${style.weightUnit}`}>Kg</div>
                </div>
                <div className={`${style.dustBin}`}>
                    <div className={`${style.dustBinItems}`}>
                        <div >
                            <FiTrash2 className={`${style.dustBinIcon}`} size={30} />
                        </div>
                        <div className={`${style.dustBinCount}`}>
                            <span>15</span>
                        </div>
                        <div className={`${style.dustBinText}`}>
                            <span>Total Weight</span>
                        </div>
                    </div>
                    <div className={`${style.dustBinItems}`}>
                        <div >
                            <FiTrash className={`${style.dustBinIcon}`} size={30} />
                        </div>
                        <div className={`${style.dustBinCount}`}>
                            <span>1</span>
                        </div>
                        <div className={`${style.dustBinText}`}>
                            <span>Drum Weight</span>
                        </div>
                    </div>
                    <div className={`${style.dustBinItems}`}>
                        <div >
                            <FiTrash2 className={`${style.dustBinIcon}`} size={30} />
                        </div>
                        <div className={`${style.dustBinCount}`}>
                            <span>14</span>
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
                    <button>
                        <FaCheckCircle className={style.icon} />
                        Done</button>
                </div>
            </div>
        </div>
    )
}

export default MarkSegregation