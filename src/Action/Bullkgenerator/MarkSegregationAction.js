import moment from 'moment';
import * as common from '../../Components/Common/commonservice';
export const setData = (data, setSegregationType, setSegregationDetails, setIsSelected) => {
    setSegregationType(data?.segregationType || "");
    setSegregationDetails((pre) => {
        let detail = { ...pre };
        detail.totalWeight = Number(data?.wasteWeight) || '0';
        detail.drumWeight = Number(data?.drumWeight) || '0';
        detail.wasteWeight = Number(data?.wasteWeight || 0) - Number(data?.drumWeight || 0);
        return detail;
    });
    setIsSelected(data?.segregationType ? true : false);

};

export const markSegregationType = (value, setSegregationType, setPageData, setIsSelected) => {
    setSegregationType(value);
    setPageData((pre) => {
        let obj = { ...pre };
        obj.data['segregationType'] = value;
        return obj;
    });
    setIsSelected(true);
};

export const markSegregationDone = (segregationType, setSegregationDone) => {
    if (!segregationType || segregationType.trim() === "") {
        common.setAlertMessage("error", "Please select a segregation level.");
        return;
    }
    setSegregationDone(true);
};
export const addAnotherWaste = (
    setCollectorWasteReport,
    setPageData,
    pageData,
    segregationType,
    segregationDetails,
    setSegregationDone,
    setIsSelected
) => {
    const { totalWeight, drumWeight, wasteWeight } = segregationDetails;

    const data = {
        binId: pageData?.binId || "",
        segregationType,
        totalWeight: totalWeight || "0",
        drumWeight: drumWeight || "0",
        wasteWeight: wasteWeight || "0",
        dustBinImg: pageData?.imgName || "",
        wasteType: pageData?.wasteType || ""
    };

    const parsedWeight = Number(Number(wasteWeight ?? 0).toFixed(1));
    const wasteType = pageData?.wasteType?.trim();

    setCollectorWasteReport((prev) => {
        const obj = { ...prev };

        // Assign waste type weight
        switch (wasteType) {
            case "Wet Waste":
                obj.wetWaste = parsedWeight;
                break;
            case "Dry Waste":
                obj.dryWaste = parsedWeight;
                break;
            case "Reject Waste":
                obj.rejectWaste = parsedWeight;
                break;
            case "Garden Waste":
                obj.gardenWaste = parsedWeight;
                break;
            default:
                break;
        }

        const existingIndex = obj.list.findIndex(item => item.binId === data.binId);

        if (existingIndex === -1) {
            obj.list = [...obj.list, data];
        } else {
            // Update existing record immutably
            const updatedList = [...obj.list];
            updatedList[existingIndex] = {
                ...updatedList[existingIndex],
                totalWeight,
                drumWeight,
                wasteWeight,
                segregationType,
                wasteType: pageData?.wasteType || "",
                dustBinImg: pageData?.imgName || "",
            };
            obj.list = updatedList;
        }

        return obj;
    });

    // Reset page data for next waste entry
    setPageData((prev) => ({
        ...prev,
        title: 'Waste Type',
        wasteType: true,
        drumWeight: false,
        segregation: false,
        wasteWeight: false,
        wasteReport: false,
        isUpdate: false,
        data: {}
    }));

    setSegregationDone(false);
    setIsSelected(false);
};


export const endOfWeightment = (
    setCollectorWasteReport,
    setPageData,
    pageData,
    segregationType,
    segregationDetails,
    setSegregationDone,
    setIsSelected
) => {
    let { totalWeight, drumWeight, wasteWeight } = segregationDetails;

    let data = {
        binId: pageData?.binId || "",
        segregationType,
        totalWeight: totalWeight || "0",
        drumWeight: drumWeight || "0",
        wasteWeight: wasteWeight || "0",
        dustBinImg: pageData?.imgName || "",
        wasteType: pageData?.wasteType || "",
    };

    const reportDate = moment().format("DD MMM YYYY | HH:mm A");

    setCollectorWasteReport((prev) => {
        let obj = { ...prev };

        // Convert wasteWeight to number with 1 decimal precision
        const parsedWeight = Number(Number(wasteWeight ?? 0).toFixed(1));

        // Set waste category-specific weight
        const wasteType = pageData?.wasteType?.trim();
        switch (wasteType) {
            case "Wet Waste":
                obj.wetWaste = parsedWeight;
                break;
            case "Dry Waste":
                obj.dryWaste = parsedWeight;
                break;
            case "Reject Waste":
                obj.rejectWaste = parsedWeight;
                break;
            case "Garden Waste":
                obj.gardenWaste = parsedWeight;
                break;
            default:
                break;
        }

        const existingIndex = obj.list.findIndex((item) => item.binId === data.binId);

        if (existingIndex === -1) {
            // Add new entry if not present
            obj.list = [...obj.list, data];
        } else {
            // Update existing entry
            obj.list[existingIndex] = {
                ...obj.list[existingIndex],
                totalWeight,
                drumWeight,
                wasteWeight,
                segregationType,
                wasteType: pageData?.wasteType || "",
                dustBinImg: pageData?.imgName || "",
            };
        }

        // Recalculate total waste collected
        const totalCollectedWasteWeight = Number(
            obj.list.reduce((acc, val) => acc + Number(val?.wasteWeight ?? 0), 0).toFixed(1)
        );

        obj.totalWasteCollected = totalCollectedWasteWeight;
        obj.reportDate = reportDate;

        return obj;
    });

    setPageData((prev) => ({
        ...prev,
        title: "Collected Waste Report",
        wasteType: false,
        drumWeight: false,
        segregation: false,
        wasteWeight: false,
        wasteReport: true,
        isUpdate: false,
    }));

    setSegregationDone(false);
    setIsSelected(false);
};
