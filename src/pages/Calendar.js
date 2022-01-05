import NavBar from "../components/Navigation/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import WorkloadDisplay from "../components/Calendar/WorkloadDisplay";

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
