import { images } from '../../Services/Images'
import style from '../../Styles/WasteType/Wastetype.module.css'

const Wastetype = () => {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.wasteTypeContainer}`}>
                <div className={`${style.wasteType}`}>
                    <div className={`${style.wasteTypeItem}`}>
                        <img src={images.wetWaste} className={`${style.wetWasteImg}`} />
                        Wet Waste
                    </div>
                    <div className={`${style.wasteTypeItem}`}>
                        <img src={images.dryWaste} className={`${style.wetWasteImg}`} />
                        Dry Waste
                    </div>
                </div>
                <div className={`${style.wasteType}`}>
                    <div className={`${style.wasteTypeItem}`}>
                        <img src={images.rejectedWaste} className={`${style.wetWasteImg}`} />
                        Reject Waste
                    </div>
                    <div className={`${style.wasteTypeItem}`}>
                        <img src={images.gardenWaste} className={`${style.wetWasteImg}`} />
                        Garden Waste
                    </div>
                </div>

            </div>
            <div className={`${style.bgText}`}>
                <div className={`${style.noteContainer}`}>
                    <h4>Note: Please select the Waste Type</h4>
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