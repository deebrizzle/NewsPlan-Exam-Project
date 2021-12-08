import NavBar from "../components/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import { Headline } from "./ContentSchedule.styles";

function Calendar() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <Headline>CALENDAR</Headline>
      </PageWrapper>
    </>
  );
}
export default Calendar;
