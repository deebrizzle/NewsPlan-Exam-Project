import NavBar from "../components/Navigation/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import WorkloadOverview from "../components/Calendar/WorkloadOverview";

function Calendar() {

  return (
    <>
      <NavBar />
      <PageWrapper>
        <WorkloadOverview />
      </PageWrapper>
    </>
  );
}
export default Calendar;
