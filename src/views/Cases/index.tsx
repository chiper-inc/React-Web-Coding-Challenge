import ContentLayout from "../../layout/Content";
import { CasesList } from "../../containers/Cases";

const CasesView = () => {
  return (
    <ContentLayout title="Cases">
      <CasesList/>
    </ContentLayout>
  );
};

export default CasesView;
