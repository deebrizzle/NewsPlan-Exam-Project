import BasicSelect from "./BasicSelect";

export function SelectArticles({ handleCallBackSelection }) {
    const articles = [];
    return (
      <BasicSelect
        label="Articles"
        value={articles}
        arrayOfOptions={articles}
        handleCallBackSelection={handleCallBackSelection}
      />
    );
  }