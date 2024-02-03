import GeneralForm from "./components/GeneralForm";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PortalForm from "./components/PortalForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<PortalForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
