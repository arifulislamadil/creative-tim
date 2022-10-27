import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';
import Billing from './Pages/Billing';
import DashBoard from './Pages/DashBoard';
import Rtl from './Pages/Rtl';
import Tables from './Pages/Tables';
import VirtualReality from './Pages/VirtualReality';



function App() {
  
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/virtualReality" element={<VirtualReality />} />
          <Route path="/rtl" element={<Rtl />} />
        </Routes>
      </SideBar>
    </BrowserRouter>

  );
}

export default App;
