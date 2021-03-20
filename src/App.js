import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Global.css';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes/>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
