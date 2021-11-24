import BasicSelect from "./BasicSelect";

const options = ["Financial", "Sports", "Foreign affairs", "Motor"];

export function SelectSection({ handleCallBackSelection }) {
  return (
    <BasicSelect
      arrayOfOptions={options}
      label="Section"
      handleCallBackSelection={handleCallBackSelection}
    />
  );
}

const employees = ["ACL", "EGL", "KSM", "MLI", "NGP", "PO", "YRL"];

export function SelectSource({ props }) {
  return (
    <BasicSelect arrayOfOptions={employees} label="Source" props={props} />
  );
}

const visibilities = [
  "Only myself",
  "Chief Editor",
  "Section Staff",
  "Everyone",
];

export function SelectVisibilities({ handleCallBackSelection }) {
  return BasicSelect(visibilities, "Visibility", handleCallBackSelection);
}

const articles = [
  "Amount of votes from low income counties set new records",
  "How to vote as a foreigner in Denmark",
];

export function SelectArticles({ handleCallBackSelection }) {
  return BasicSelect(articles, "Articles", handleCallBackSelection);
}
