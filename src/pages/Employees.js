import NavBar from "../components/Navigation/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import ContentScheduleEmployees from "../components/ContentSchedule/ContentScheduleEmployees";

export default function Employees() {
    return (
      <>
        <NavBar />
        <PageWrapper>
          <ContentScheduleEmployees/>
        </PageWrapper>
      </>
    );
  }
  