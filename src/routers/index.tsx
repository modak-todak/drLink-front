import type { RouteProps } from "react-router-dom";
import Dashboard from "../pages/main/DashBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ConsultationRequest from "../pages/consultationManagement/ConsultationRequest";
import ConsultationRecords from "../pages/consultationManagement/ConsultationRecords";
import LiveConsultation from "../pages/consultationManagement/LiveConsultation";
import MedicalOpinion from "../pages/consultationManagement/MedicalOpinion";
import ConsultationHistory from "../pages/consultationManagement/ConsultationHistory";
import HospitalManagement from "../pages/recordsManagement/HospitalManagement";
import AddDoctor from "../pages/recordsManagement/AddDoctor";
import DigitalSignature from "../pages/recordsManagement/DigitalSignature";
import AccessLogs from "../pages/recordsManagement/AccessLogs";
import HospitalDirectory from "../pages/main/HospitalDirectory";
import FormInputsExample from "../components/examples/FormInputsExample";
import ButtonExample from "../components/examples/ButtonExample";
import SidebarExample from "../components/examples/SidebarExample";
import NavigationExample from "../components/examples/NavigationExample";
import CardExample from "../components/examples/CardExample";
import FeedbackExample from "../components/examples/FeedbackExample";
import ModalExample from "../components/examples/ModalExample";
import TableExample from "../components/examples/TableExample";

export const ROUTER_CONFIGS: RouteProps[] = [
  {
    index: true,
    path: "/home",

    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/management/consultation-history",
    element: <ConsultationHistory />,
  },
  { path: "/main/hospital-directory", element: <HospitalDirectory /> },
];

export const CONSULTATION_ROUTER_CONFIGS: RouteProps[] = [
  {
    path: "consultation-request",
    element: <ConsultationRequest />,
  },
  {
    path: "consultation-records",
    element: <ConsultationRecords />,
  },
  { path: "live-consultation", element: <LiveConsultation /> },
  { path: "medical-opinion", element: <MedicalOpinion /> },
];

export const COMPONENTS_ROUTER_CONFIGS: RouteProps[] = [
  { path: "form-inputs", element: <FormInputsExample /> },
  { path: "button", element: <ButtonExample /> },
  { path: "table", element: <TableExample /> },
  { path: "modal", element: <ModalExample /> },
  { path: "feedback", element: <FeedbackExample /> },
  { path: "card", element: <CardExample /> },
  { path: "navigation", element: <NavigationExample /> },
  { path: "sidebar", element: <SidebarExample /> },
];

export const RECORDS_ROUTER_CONFIGS: RouteProps[] = [
  { path: "hospital", element: <HospitalManagement /> },
  { path: "add-doctor", element: <AddDoctor /> },
  { path: "digital-signature", element: <DigitalSignature /> },
  { path: "access-logs", element: <AccessLogs /> },
];
