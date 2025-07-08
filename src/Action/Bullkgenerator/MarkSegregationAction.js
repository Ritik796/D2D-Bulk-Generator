export const setData = (data, setSegregationType,setSegregationDetails) => {
    setSegregationType(data?.segregationType || "");
    setSegregationDetails((pre)=>{
        let detail = {...pre};
        detail.totalWeight = Number(data?.wasteWeight)||'0';
        detail.drumWeight = Number(data?.drumWeight)||'0';
        detail.wasteWeight = Number(data?.wasteWeight||0) - Number(data?.drumWeight||0)
        return detail;
    })

}

export const markSegregationType =(value,setSegregationType,setPageData)=>{
    setSegregationType(value);
    setPageData((pre)=>{
        let obj ={...pre};
        obj.data['segregationType'] = value;
        return obj;
    })
}