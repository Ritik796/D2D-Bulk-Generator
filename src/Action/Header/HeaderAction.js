export const handleBackAction = (setPageData) => {
    setPageData((pre) => {
        let obj = { ...pre };
        if (obj.wasteType) {
            return obj
        }
        else if (obj.wasteWeight) {
            obj.title = 'Waste Type'
            obj.wasteType = true;
            obj.drumWeight = false;
            obj.segregation = false;
            obj.wasteWeight = false;
            obj.wasteReport = false
        }
        else if (obj.drumWeight) {
            obj.title = obj?.data?.wasteType
            obj.wasteType = false;
            obj.drumWeight = false;
            obj.segregation = false;
            obj.wasteWeight = true;
            obj.wasteReport = false
        }
        else if (obj.segregation) {
            obj.title = obj?.data?.wasteType
            obj.wasteType = false;
            obj.drumWeight = true;
            obj.segregation = false;
            obj.wasteWeight = false;
            obj.wasteReport = false
        }
        else if (obj.wasteReport) {
             obj.title = obj?.data?.wasteType
            obj.wasteType = false;
            obj.drumWeight = false;
            obj.segregation = true;
            obj.wasteWeight = false;
            obj.wasteReport = false
        }
        return obj
    })
}