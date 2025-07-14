import * as common from '../../Components/Common/commonservice';
export const handleOnChange = (value, setWeight, setBinAdded) => {
    setWeight(value);
};

export const handleNext = (weight, setPageData) => {
    setPageData((pre) => {
        let obj = { ...pre };
        obj.data['wasteWeight'] = weight;
        obj.wasteType = false;
        obj.drumWeight = true;
        obj.segregation = false;
        obj.wasteWeight = false;
        return obj;
    });

};

export const setData = (data, setWeight, setBinAdded) => {
    setWeight(data?.wasteWeight || "");
    setBinAdded(data?.wasteWeight ? true : false);
};

export const addBin = (weight, collectorWasteReport, setBinAdded, setPageData,data,showToastMessage) => {
    if (!weight ||isNaN(weight) || Number(weight)===0) {
        showToastMessage('error', 'Please enter a valid weight greater than 0.');
         setBinAdded(false);
        return;
    }
    if (data.binId) {
        setBinAdded(true);
        return
    }
    let binId = collectorWasteReport?.list?.length > 0 ? `Bin-${collectorWasteReport?.list?.length + 1}` : 'Bin-1';
    setPageData(pre=>{
        let obj = {...pre};
        obj.data['binId'] = binId;
        return obj;
    })
    setBinAdded(true);

};