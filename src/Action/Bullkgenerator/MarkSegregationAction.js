export const setData = (data, setSegregationType) => {
    setSegregationType(data?.segregationType || "")
}

export const markSegregationType =(value,setSegregationType,setPageData)=>{
    setSegregationType(value);
    setPageData((pre)=>{
        let obj ={...pre};
        obj.data['segregationType'] = value;
        return obj;
    })
}