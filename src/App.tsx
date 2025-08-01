import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/main/DashBoard';
import ConsultationRequest from './pages/consultationManagement/ConsultationRequest';
import ConsultationRecords from './pages/consultationManagement/ConsultationRecords';
import LiveConsultation from './pages/consultationManagement/LiveConsultation';
import MedicalOpinion from './pages/consultationManagement/MedicalOpinion';
import ConsultationHistory from './pages/consultationManagement/ConsultationHistory';
import HospitalManagement from './pages/recordsManagement/HospitalManagement';
import AccessLogs from './pages/recordsManagement/AccessLogs';
import HospitalDirectory from './pages/main/HospitalDirectory';
import NotFound from './pages/NotFound';
import AddDoctor from './pages/recordsManagement/AddDoctor';

function App() {
  return (
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
