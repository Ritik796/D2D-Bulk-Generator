
import { FiTrash2, FiTrash } from "react-icons/fi";
import { TbClipboardText } from "react-icons/tb";
import { FaCheckCircle } from 'react-icons/fa';
import style from '../../Styles/CollectedWasteReport/CollectedWasteReport.module.css';
import { saveBWGData } from "../../Services/bwgDeatilSubmit";
import { useToastMessage } from "../Common/ToastContainer/ToastContext";

const CollectedWasteReport = ({ collectorWasteReport, setCollectorWasteReport }) => {
    let { showToastMessage } = useToastMessage();
    const handleSave = async () => {
        setCollectorWasteReport(pre => ({ ...pre, loading: true }));
        let res = await saveBWGData(collectorWasteReport.houseId, collectorWasteReport.list, collectorWasteReport.totalWasteCollected);
        if (res.status === 'success') {
            let payload = {
                status: res.status,
                msg: res.msg
            };
            showToastMessage('success', res.msg);
            window?.Android?.sendDataToAndroid(JSON.stringify(payload));
            setCollectorWasteReport(pre => ({ ...pre, list: [], houseId: "", totalWasteCollected: 0, reportDate: "", wetWaste: "", dryWaste: "", rejectWaste: "", gardenWaste: "", loading: false }));
            return;
        }
        else {
            let payload = {
                status: res.status,
                msg: res.msg
            };
            showToastMessage('error', res.msg);
            setCollectorWasteReport(pre => ({ ...pre, loading: false }));
            window?.Android?.sendDataToAndroid(JSON.stringify(payload));
            return;
        }
    };
    return (
        <div className={`${style.container}`}>
            <div className={`${style.wasteCollectCon}`}>
                <div className={`${style.binSummary}`}>
                    <span className={`${style.binSummaryIcon}`}>
                        <FiTrash2 size={30} />
                    </span>
                    <div className={`${style.binSummaryDiv}`}>
                        <span className={`${style.binSummary_Text}`}>Total waste collected</span>
                        <span className={`${style.binSummary_Time}`}>{collectorWasteReport?.reportDate || ''}</span>
                    </div>
                </div>
                <div className={`${style.binSummaryDivValue}`}>
                    <span className={`${style.binSummaryValue}`}>{collectorWasteReport?.totalWasteCollected || 0}</span>
                    <span className={`${style.binSummaryValue_unit}`}> kg</span>
                </div>

            </div>
            <div className={`${style.wasteCollectOverView}`}>
                <div className={`${style.overview_head}`}>
                    <span className={`${style.overview_head_Icon}`}>
                        <TbClipboardText size={28} color="grey" />
                    </span>
                    <span className={`${style.overview_head_Text}`}>
                        Overview
                    </span>
                </div>
                <div className={`${style.overviewContainer}`}>
                    {collectorWasteReport?.list?.length > 0 ? (
                        <>
                            {collectorWasteReport.list.map((item) => (
                                <div className={`${style.listCard}`} key={item.binId}>
                                    <div className={`${style.cardImgContainer}`}>
                                        <img src={require(`../../assets/images/${item.dustBinImg}`)} width='25px' alt="" />
                                    </div>
                                    <div className={`${style.cardDetailsCon}`}>
                                        <span className={`${style.cardDetails_head}`}>{item?.wasteType || ""}</span>
                                        <div className={`${style.cardDusBin}`}>
                                            <div className={`${style.cardDusBin_item}`}>
                                                <span className={`${style.bin}`}>
                                                    <FiTrash2 size={20} />
                                                </span>
                                                <span>{item?.totalWeight || 0}</span>
                                            </div>
                                            <div className={`${style.cardDusBin_item}`}>
                                                <span className={`${style.bin}`}>
                                                    <FiTrash size={20} />
                                                </span>
                                                <span>{item?.drumWeight || 0}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${style.binWeightCon}`}>
                                        <div className={`${style.binWeight}`}>
                                            <span className={`${style.bin}`}>
                                                <FiTrash2 color="green" size={20} />
                                            </span>
                                            <div className={`${style.binDiv}`}>
                                                <span className={`${style.binValue}`}>{item?.wasteWeight || 0}</span>
                                                <span className={`${style.binUnit}`}>kg</span>
                                            </div>
                                        </div>
                                        <div className={`${style.binStatusDiv}`}>
                                            <span className={`${style.binStatus}`}>
                                                {item?.segregationType || ''}
                                                {/* Mixed waste */}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (<div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>No Data Found</div>)}


                </div>
            </div>
            <div className={`${style.wasteBtn}`}>
                <button onClick={handleSave}>
                    <FaCheckCircle className={style.icon} />
                    Submit</button>
            </div>
        </div>
    );
};

export default CollectedWasteReport;