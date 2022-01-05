import NavBar from "../components/Navigation/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import { useEffect, useState } from "react";
import WorkloadDisplay from "../components/ContentSchedule/WorkloadDisplay";

function Calendar() {

  return (
    <>
      <NavBar />
      <PageWrapper>
        <WorkloadDisplay />
      </PageWrapper>
    </>
  );
}
export default Calendar;
