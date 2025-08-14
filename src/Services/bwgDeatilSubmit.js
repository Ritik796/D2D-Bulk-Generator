
import * as db from "../Services/dbService";
import * as common from '../Components/Common/commonservice';
import { getCurrentDatabase } from "../Firebase";
let failStatus = 'fail';
let successStatus = 'success';
let testUrl = 'https://dtdnavigatortesting.firebaseio.com/';
let totalDrumWeight = 0;
// let databaseUrl = `https://dtdecogram.firebaseio.com/`
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
            if (response === "success") {

            } else {

                // return resolve("failed");
            }
        });
        // console.log(res)
    });

};

/*
    Function name : saveBWGData();
    Description : This Function is working for save BWG data 
    Written by  : Ritik Parmar
    Written date : 14 Jul 2025 
 */
export const saveBWGData = async (houseId, bwgData, totalWasteCollected) => {
    try {
        if (!houseId || bwgData.length === 0 || !totalWasteCollected) {
            return common.setResponse(failStatus, 'Invalid Params !!!', {
                service: "saveBWGData",
                params: { houseId, bwgData, totalWasteCollected }
            });
        }
        let database = getCurrentDatabase(testUrl)
        let cardDetails = await db.getData(`/CardWardMapping/${houseId}`, database);
        if (!cardDetails) {
            return common.setResponse(failStatus, 'CardDetails not found', {
                service: "saveBWGData",
                params: { cardDetails }
            });
        }

        const { date, month, year } = common.getCurrentDate();

        // Save individual BWG entries
        const bwgPromises = bwgData.map((bwg, index) => {
            let data = {
                drumWeight: bwg?.drumWeight || "",
                segregationLevel: bwg?.segregationType || "",
                totalWeight: bwg?.totalWeight || "",
                wasteType: bwg?.wasteType || "",
                wasteWeight: bwg?.wasteWeight || "",
            };
            const weight = parseFloat(bwg?.drumWeight || 0);
            totalDrumWeight += isNaN(weight) ? 0 : weight;

            return db.saveData(
                `/HousesCollectionInfo/${cardDetails.ward}/${year}/${month}/${date}/${houseId}/BWGData/${index + 1}`,
                data, database
            );
        });

        // Also save totalWasteCollected
        const totalWastePromise = db.saveData(
            `/HousesCollectionInfo/${cardDetails.ward}/${year}/${month}/${date}/${houseId}/BWGData/`,
            { totalWasteCollection: totalWasteCollected, totalDrumWeight: totalDrumWeight},
            database
        );

        // Wait for all to complete
        await Promise.all([...bwgPromises, totalWastePromise]);

        return common.setResponse(successStatus, 'Data saved successfully', {
            service: "saveBWGData",
            params: { houseId }
        });

    } catch (error) {
        return common.setResponse(failStatus, "Error saving bwg details", {
            service: "saveBWGData",
            params: { error }
        });
    }
};
