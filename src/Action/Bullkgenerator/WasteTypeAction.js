export const setData = (data, setSelectedWasteType, selectedWasteType) => {
    setSelectedWasteType(data?.wasteType || selectedWasteType);
};

export const selectedWasteType = (type, setSelectedWasteType, setPageData, collectorWasteReport) => {
    setSelectedWasteType(type);
    setPageData((pre) => {
        let obj = { ...pre };
        if (obj.data.wasteType !== type) {
            Object.keys(obj.data).forEach(key => {
                delete obj.data[key];
            });
        }

        if (collectorWasteReport?.list?.length) {
            let detail = collectorWasteReport.list.find(item => item?.wasteType?.trim() === type?.trim());
            if (detail) {
                obj.data.wasteWeight = detail?.totalWeight || '';
                obj.data.drumWeight = detail?.drumWeight || "";
                obj.data.segregationType = detail?.segregationType || "";
                obj.data.binId = detail?.binId || "";
                obj.isUpdate = true
            }
        }
        obj.data.wasteType = type;
        obj.data.imgName = type?.trim() === 'Wet Waste' ? 'WetWaste.png' : type?.trim() === 'Dry Waste' ? "DryWaste.png" : type?.trim() === 'Reject Waste' ? "RejectedWaste.png" : type?.trim() === 'Garden Waste' ? 'GardenWaste.png' : '';
        obj.title = type;
        obj.wasteType = false;
        obj.drumWeight = false;
        obj.segregation = false;
        obj.wasteWeight = true;
        return obj;
    });
};