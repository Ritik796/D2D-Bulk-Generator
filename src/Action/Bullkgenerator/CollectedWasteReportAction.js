import * as service from '../../Services/bwgDeatilSubmit'
export const processBWdData = async (collectorWasteReport, setCollectorWasteReport, showToastMessage) => {
    setCollectorWasteReport(pre => ({ ...pre, loading: true }));
    let res = await service.saveBWGData(collectorWasteReport.houseId, collectorWasteReport.list, collectorWasteReport.totalWasteCollected);
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