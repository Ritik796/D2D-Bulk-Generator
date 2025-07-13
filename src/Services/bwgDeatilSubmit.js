
import * as db from "../Services/dbService";
import * as common from '../Components/Common/commonservice'

export const submitBWGDetails = async (houseId, totalWeight, drumWeight, wasteWeight, segregationLevel) => {

    return new Promise(async (resolve) => {


        const currentDateTime = common.getCurrentDataTime();
        const { date, month, year } = common.getCurrentDate();
        const bwgData = {
            totalWeight: totalWeight,
            drumWeight: drumWeight,
            _at: currentDateTime,
            wasteWeight: wasteWeight,
            segregationLevel: segregationLevel,
        
        };
        const path = `BWGData/${year}/${month}/${date}/${houseId}`;
        // console.log(path, dustbinData);
        db.saveData(path, bwgData).then(async (response) => {
            // console.log(response);
            if (response == "success") {
                
            } else {
             
                // return resolve("failed");
            }
        });
        // console.log(res)
    });


}