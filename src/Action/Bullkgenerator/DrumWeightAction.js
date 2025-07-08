export const handleOnChange = (type, value, setWeight, setDrumWeight, setPageData) => {
    if (type === 'weight') {
        setWeight(value);
        setPageData((pre) => {
            let obj = { ...pre };
            obj.data['wasteWeight'] = value;
            return obj
        })
    }
    else {
        setDrumWeight(value);
    }

}

export const handleNext = (weight, drumWeight, setPageData) => {
    setPageData((pre) => {
        let obj = { ...pre };
        obj.data['drumWeight'] = drumWeight;
        obj.data.wasteWeight = weight
        obj.wasteType = false;
        obj.drumWeight = false;
        obj.segregation = true;
        obj.wasteWeight = false;
        return obj
    })
}

export const setData = (data, setDrumWeight, drumWeight, setWeight, weight) => {
    setDrumWeight(data?.drumWeight || drumWeight);
    setWeight(data?.wasteWeight || weight)
}