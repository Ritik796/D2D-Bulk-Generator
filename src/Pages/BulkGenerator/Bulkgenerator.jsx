import { useState, useEffect } from 'react'
import style from '../../Styles/BulkGenerator/BulkGenerator.module.css'
import Header from '../../Components/Common/Header/Header'
import Wastetype from '../../Components/WasteType/Wastetype'
import MarkSegregation from '../../Components/MarkSegregation/MarkSegregation'
import DrumWeight from '../../Components/DrumWeight/DrumWeight'
import WetWaste from '../../Components/WetWaste/WetWaste'
import { Alert } from 'bootstrap'


const Bulkgenerator = () => {
  const [pageData, setPageData] = useState({ title: "Waste Type", wasteType: true, wasteWeight: false, drumWeight: false, segregation: false, data: {} })
  const [houseId, setHouseId] = useState(null);

  // useEffect(() => {
  //   window.receiveMessage = (message) => {
  //     console.log("Message from Android:", message);
  //     // localStorage.setItem('houseId',message)
  //     // localStorage.setItem('city','Test')
  //     setHouseId(message);
  //   };

  // }, []);

  return (
    <div className={`${style.container}`}>
      <div>
        <Header title={pageData.title} setPageData={setPageData} />
      </div>
      <div>
        {pageData.wasteType ? (
          <Wastetype pageData={pageData} setPageData={setPageData} />
        ) : pageData.wasteWeight ?
          (<WetWaste pageData={pageData} setPageData={setPageData} />) : pageData.drumWeight ?
            (<DrumWeight pageData={pageData} setPageData={setPageData} />) : pageData.segregation ?
              (<MarkSegregation pageData={pageData} setPageData={setPageData} />) : null}
      </div>
    </div>
  )
}

export default Bulkgenerator