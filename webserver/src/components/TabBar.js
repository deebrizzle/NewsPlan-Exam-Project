import React, { useState } from "react";
import CalendarView from "./ContentScheduleCalendar";



const TabBar = () => {
const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="TabBar">
            <ul className="nav">
                <li className={activeTab === "tab1" ? "active" : ""} >Calendar View</li>
                <li className={activeTab === "tab2" ? "active" : ""}>List View</li>
            </ul>
            <div className="content">
            </div>
        </div>
    );
}

const handleTab1 = () => {

}

export default TabBar;