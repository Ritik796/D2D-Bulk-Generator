import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Bulkgenerator from '../Pages/BulkGenerator/Bulkgenerator';

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Bulkgenerator/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent