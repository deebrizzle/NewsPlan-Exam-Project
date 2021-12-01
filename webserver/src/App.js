import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import IdeaBank from "./pages/IdeaBank.js";
import ContentSchedule from "./pages/ContentSchedule.js";
import Calendar from "./pages/Calendar.js";
import Article from "./components/Article";
import Parse from "parse";

Parse.initialize(
  process.env.REACT_APP_APPLICATION_KEY,
  process.env.REACT_APP_JS_KEY
);
Parse.serverURL = "https://parseapi.back4app.com/";

function LoginRequired({ children }) {
  const userAuth = Parse.User.current();
  return userAuth !== null ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <LoginRequired>
              <Home />
            </LoginRequired>
          }
        />
        <Route
          path="/ideabank"
          element={
            <LoginRequired>
              <IdeaBank />
            </LoginRequired>
          }
        />
        <Route
          path="/contentschedule"
          element={
            <LoginRequired>
              <ContentSchedule />
            </LoginRequired>
          }
        />
        <Route
          path="/calendar"
          element={
            <LoginRequired>
              <Calendar />
            </LoginRequired>
          }
        />
        <Route path="/contentschedule/:id" element={
            <LoginRequired>
              <Article url={window.location.pathname}/>
            </LoginRequired>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
