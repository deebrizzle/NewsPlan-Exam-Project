import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import { PageWrapper } from "./PageMargin.styles";
import ContentScheduleListView from "./ContentScheduleListView";

function ContentSchedule() {
    return (
        <>
        <NavBar/>
        <PageWrapper>
        <h1>Content Schedule</h1>
        <ContentScheduleListView />
        </PageWrapper>
        </>
          );
  }
  export default ContentSchedule