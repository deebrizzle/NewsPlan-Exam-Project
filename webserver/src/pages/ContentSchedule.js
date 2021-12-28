import NavBar from "../components/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import TabBar from "../components/TabBar";
import { Headline } from "./ContentSchedule.styles";

function ContentSchedule() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <TabBar />
      </PageWrapper>
    </>
  );
}

export default ContentSchedule;
