export const setData = (data, setSelectedWasteType,selectedWasteType) => {
    setSelectedWasteType(data?.wasteType || selectedWasteType)
}

export const selectedWasteType = (type, setSelectedWasteType, setPageData) => {
    setSelectedWasteType(type);
    setPageData((pre) => {
        let obj = { ...pre };
        if (obj.data.wasteType !== type) {
            Object.keys(obj.data).forEach(key => {
                delete obj.data[key];
            });
        }
        obj.data.wasteType = type;

        obj.title = type;
        obj.wasteType = false;
        obj.drumWeight = false;
        obj.segregation = false;
        obj.wasteWeight = true;
        return obj
    })
}