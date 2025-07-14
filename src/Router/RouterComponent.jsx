import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bulkgenerator from '../Pages/BulkGenerator/Bulkgenerator';
import ToastProvider from '../Components/Common/ToastContainer/ToastContext';

const RouterComponent = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Bulkgenerator />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default RouterComponent;