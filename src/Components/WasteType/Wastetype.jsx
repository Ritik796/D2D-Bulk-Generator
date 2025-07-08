import { useEffect, useState } from 'react'
import { images } from '../../Services/Images'
import style from '../../Styles/WasteType/Wastetype.module.css';
import * as action from '../../Action/Bullkgenerator/WasteTypeAction'

const Wastetype = (props) => {
    let { pageData, setPageData } = props;
    const [selectedWasteType, setSelectedWasteType] = useState(null);
    useEffect(() => {
        if (pageData.data) {
            handleSetdata(pageData.data)
        }
        // eslint-disable-next-line 
    }, [pageData.data]);
    
    const handleSetdata = (data) => {
        action.setData(data, setSelectedWasteType,selectedWasteType)
    }
    const handleSelectWasteType = (type)=>{
        action.selectedWasteType(type,setSelectedWasteType,setPageData);
    }
    return (
        <div className={`${style.container}`}>
            <div className={`${style.wasteTypeContainer}`}>
                <div className={`${style.wasteType}`}>
                    <div className={`${style.wasteTypeItem} ${selectedWasteType?.trim() === 'Wet Waste' ? style.selectedWasteType : ""}`} onClick={()=>handleSelectWasteType(' Wet Waste')}>
                        <img src={images.wetWaste} className={`${style.wetWasteImg}`} alt='' />
                        Wet Waste
                    </div>
                    <div className={`${style.wasteTypeItem} ${selectedWasteType?.trim() === 'Dry Waste' ? style.selectedWasteType : ""}`} onClick={()=>handleSelectWasteType('Dry Waste')}>
                        <img src={images.dryWaste} className={`${style.wetWasteImg}`} alt='' />
                        Dry Waste
                    </div>
                </div>
                <div className={`${style.wasteType}`}>
                    <div className={`${style.wasteTypeItem} ${selectedWasteType?.trim() === 'Reject Waste' ? style.selectedWasteType : ""}`} onClick={()=>handleSelectWasteType(' Reject Waste')}>
                        <img src={images.rejectedWaste} className={`${style.wetWasteImg}`} alt='' />
                        Reject Waste
                    </div>
                    <div className={`${style.wasteTypeItem} ${selectedWasteType?.trim() === 'Garden Waste' ? style.selectedWasteType : ""}`} onClick={()=>handleSelectWasteType(' Garden Waste ')}>
                        <img src={images.gardenWaste} className={`${style.wetWasteImg}`} alt='' />
                        Garden Waste
                    </div>
                </div>

            </div>
            <div className={`${style.bgText}`}>
                <div className={`${style.noteContainer}`}>
                    <h4>Note: Please select the waste type</h4>
                    <ul style={{ paddingLeft: "1.5rem" }}>
                        <li className={`${style.secationpoints}`}>
                            <strong>Wet Waste</strong>: Includes kitchen waste, vegetable peels, and leftover food scraps.
                        </li>
                        <li className={`${style.secationpoints}`}>
                            <strong>Dry Waste</strong>: Includes paper, plastic, cardboard, and clean packaging materials.
                        </li>
                        <li className={`${style.secationpoints}`}>
                            <strong>Reject Waste</strong>: Includes sanitary items, broken glass, and hazardous waste.
                        </li>
                        <li className={`${style.secationpoints}`}>
                            <strong>Garden Waste</strong>: Includes leaves, branches, and waste generated from garden cleaning.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Wastetype