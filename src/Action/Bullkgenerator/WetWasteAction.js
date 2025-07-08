export const handleOnChange = (value, setWeight) => {
    setWeight(value);

}

export const handleNext = (weight,setPageData) => {
    setPageData((pre) => {
        let obj = { ...pre };
        obj.data['wasteWeight'] = weight;
        obj.wasteType = false;
        obj.drumWeight = true;
        obj.segregation = false;
        obj.wasteWeight = false;
        return obj
    })
}

export const setData =(data,setWeight)=>{
    setWeight(data?.wasteWeight||"")
}