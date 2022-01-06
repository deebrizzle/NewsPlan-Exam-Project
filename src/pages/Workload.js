import NavBar from "../components/Navigation/NavBar";
import { PageWrapper } from "./PageMargin.styles";
import WorkloadOverview from "../components/Workload/WorkloadOverview";

export default function Workload() {

  return (
    <>
      <NavBar />
      <PageWrapper>
        <WorkloadOverview />
      </PageWrapper>
    </>
  );
}
