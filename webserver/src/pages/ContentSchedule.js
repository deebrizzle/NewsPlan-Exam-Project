import NavBar from "../components/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import TabBar from "../components/TabBar";

function ContentSchedule() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <h1>Content Schedule</h1>
        <TabBar />
      </PageWrapper>
    </>
  );
}

export default ContentSchedule;
