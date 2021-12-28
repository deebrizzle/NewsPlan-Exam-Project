import NavBar from "../components/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import TabBar from "../components/TabBar";
import { Headline } from "./ContentSchedule.styles";
import { ContentProvider } from "../components/ContentScheduleContext";

function ContentSchedule() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <Headline> Content Schedule </Headline>
        <ContentProvider>
        <TabBar />
        </ContentProvider>
      </PageWrapper>
    </>
  );
}

export default ContentSchedule;
