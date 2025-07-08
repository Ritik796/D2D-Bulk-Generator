export const handleOnChange = (value, setDrumWeight) => {
    setDrumWeight(value);

}

export const handleNext = (drumWeight,setPageData) => {
    setPageData((pre) => {
        let obj = { ...pre };
        obj.data['drumWeight'] = drumWeight;
        obj.wasteType = false;
        obj.drumWeight = false;
        obj.segregation = true;
        obj.wasteWeight = false;
        return obj
    })
}

export const setData =(data,setDrumWeight,drumWeight)=>{
    setDrumWeight(data?.drumWeight||drumWeight)
}