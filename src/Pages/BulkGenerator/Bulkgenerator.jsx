import { useState, useEffect } from 'react';
import style from '../../Styles/BulkGenerator/BulkGenerator.module.css';
import Header from '../../Components/Common/Header/Header';
import Wastetype from '../../Components/WasteType/Wastetype';
import MarkSegregation from '../../Components/MarkSegregation/MarkSegregation';
import DrumWeight from '../../Components/DrumWeight/DrumWeight';
import WetWaste from '../../Components/WetWaste/WetWaste';
import CollectedWasteReport from '../../Components/CollectedWasteReport/CollectedWasteReport';
import Loader from '../../Components/Common/Loader/Loader';


const Bulkgenerator = () => {
  const [pageData, setPageData] = useState({ title: "Waste Type", wasteType: true, wasteWeight: false, drumWeight: false, segregation: false, wasteReport: false, data: {}, isUpdate: false });
  const [collectorWasteReport, setCollectorWasteReport] = useState({ list: [], houseId: "", totalWasteCollected: 0, reportDate: "", wetWaste: "", dryWaste: "", rejectWaste: "", gardenWaste: "", loading: false });

  useEffect(() => {
    window.receiveMessage = (houseId) => {
      setCollectorWasteReport(pre => ({ ...pre, houseId: houseId }));
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${style.container}`}>
      <div>
        <Header title={pageData.title} setPageData={setPageData} />
      </div>
      <div>
        {pageData.wasteType ? (
          <Wastetype pageData={pageData} setPageData={setPageData} collectorWasteReport={collectorWasteReport} />
        ) : pageData.wasteWeight ?
          (<WetWaste pageData={pageData} collectorWasteReport={collectorWasteReport} setCollectorWasteReport={setCollectorWasteReport} setPageData={setPageData} />) : pageData.drumWeight ?
            (<DrumWeight pageData={pageData} collectorWasteReport={collectorWasteReport} setCollectorWasteReport={setCollectorWasteReport} setPageData={setPageData} />) : pageData.segregation ?
              (<MarkSegregation pageData={pageData} setPageData={setPageData} collectorWasteReport={collectorWasteReport} setCollectorWasteReport={setCollectorWasteReport} />)
              : pageData.wasteReport ? (<CollectedWasteReport collectorWasteReport={collectorWasteReport} setCollectorWasteReport={setCollectorWasteReport} />) : null}
      </div>
      {collectorWasteReport.loading && (<Loader />)}
    </div>
  );
};

export default Bulkgenerator;