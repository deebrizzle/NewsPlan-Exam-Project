import NavBar from "../components/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import TabBar from "../components/TabBar";
import { ContentProvider } from "../components/ContentScheduleContext";

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
