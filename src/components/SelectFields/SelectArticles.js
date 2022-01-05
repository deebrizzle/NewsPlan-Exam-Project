import BasicSelect from "./BasicSelect";

export function SelectArticles() {
    const articles = [];
    return (
      <BasicSelect
        label="Articles"
        value={articles}
        arrayOfOptions={articles}
      />
    );
  }