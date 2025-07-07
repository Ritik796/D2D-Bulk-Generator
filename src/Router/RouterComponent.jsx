import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Bulkgenerator from '../Pages/BulkGenerator/Bulkgenerator';
import WetWaste from '../Pages/BulkGenerator/WetWaste';
import DrumWeight from '../Pages/BulkGenerator/DrumWeight';

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WetWaste/>} />
        <Route path='/drum' element={<DrumWeight/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent