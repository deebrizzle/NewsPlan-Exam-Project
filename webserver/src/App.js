import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.js"
import Home from "./pages/Home.js"
import IdeaBank from "./pages/IdeaBank.js"
import ContentSchedule from "./pages/ContentSchedule.js"
import Calendar from "./pages/Calendar.js"
import Parse from "parse";

Parse.initialize(
  process.env.REACT_APP_APPLICATION_KEY,
  process.env.REACT_APP_JS_KEY
);
Parse.serverURL = "https://parseapi.back4app.com/";

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
