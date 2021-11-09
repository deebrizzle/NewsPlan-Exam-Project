import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.js"
import Home from "./pages/Home.js"
import IdeaBank from "./pages/IdeaBank.js"
import ContentSchedule from "./pages/ContentSchedule.js"
import Calendar from "./pages/Calendar.js"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ideabank" element={<IdeaBank />} />
      <Route path="/contentschedule" element={<ContentSchedule />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
