import NavBar from "../components/Navigation/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import ContentScheduleArticles from "../components/ContentSchedule/ContentScheduleArticles";

export default function Articles() {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <ContentScheduleArticles/>
      </PageWrapper>
    </>
  );
}
