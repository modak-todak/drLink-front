import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { AccountProvider } from './contexts/AccountContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/main/DashBoard';
import ConsultationRecords from './pages/consultationManagement/ConsultationRecords';
import LiveConsultation from './pages/consultationManagement/LiveConsultation';
import MedicalOpinion from './pages/consultationManagement/MedicalOpinion';
import ConsultationHistory from './pages/consultationManagement/ConsultationHistory';
import HospitalManagement from './pages/recordsManagement/HospitalManagement';
import AccessLogs from './pages/recordsManagement/AccessLogs';
import HospitalDirectory from './pages/main/HospitalDirectory';
import NotFound from './pages/NotFound';
import AddDoctor from './pages/recordsManagement/AddDoctor';
import FormInputsExample from './components/examples/FormInputsExample';
import ButtonExample from './components/examples/ButtonExample';
import TableExample from './components/examples/TableExample';
import ModalExample from './components/examples/ModalExample';
import FeedbackExample from './components/examples/FeedbackExample';
import CardExample from './components/examples/CardExample';
import NavigationExample from './components/examples/NavigationExample';
import SidebarExample from './components/examples/SidebarExample';
import ConsultationRequest from './pages/consultationManagement/ConsultationRequest';

function App() {
  return (
    <AccountProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/consultation/consultation-request" element={<ConsultationRequest />} />
            <Route path="/consultation/consultation-records" element={<ConsultationRecords />} />
            <Route path="/consultation/live-consultation" element={<LiveConsultation />} />
            <Route path="/consultation/medical-opinion" element={<MedicalOpinion />} />
            <Route path="/management/consultation-history" element={<ConsultationHistory />} />
            <Route path="/records/hospital" element={<HospitalManagement />} />
            <Route path="/records/add-doctor" element={<AddDoctor />} />
            <Route path="/records/access-logs" element={<AccessLogs />} />
            <Route path="/main/hospital-directory" element={<HospitalDirectory />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/components/form-inputs" element={<FormInputsExample />} />
            <Route path="/components/button" element={<ButtonExample />} />
            <Route path="/components/table" element={<TableExample />} />
            <Route path="/components/modal" element={<ModalExample />} />
            <Route path="/components/feedback" element={<FeedbackExample />} />
            <Route path="/components/card" element={<CardExample />} />
            <Route path="/components/navigation" element={<NavigationExample />} />
            <Route path="/components/sidebar" element={<SidebarExample />} />
          </Route>
        </Routes>
      </Router>
    </AccountProvider>
  );
}

export default App;
