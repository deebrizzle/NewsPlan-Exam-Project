import NavBar from "../components/Navigation/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import TabBar from "../components/Navigation/TabBar";
import { ContentProvider } from "../components/ContentSchedule/ContentScheduleContext"

function ContentSchedule() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <ContentProvider>
        <TabBar />
        </ContentProvider>
      </PageWrapper>
    </>
  );
}

export default ContentSchedule;
