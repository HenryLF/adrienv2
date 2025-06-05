import { StructureBuilder } from "sanity/structure";
import bioType from "./bioType";
import backgroundType from "./backgroundType";
import portfolioType from "./portfolioType";
import oscillobatType from "./oscillobatType";

export const singletonTypeList = [
  bioType,
  backgroundType,
  portfolioType,
  oscillobatType,
];

export const singletonTypeLabel = () =>
  singletonTypeList.map((type) => ({
    name: type.name,
    title: type.title ?? "Singleton",
  }));

export const singletonListBuilder = () =>
  singletonTypeLabel().map(({ title, name }) => {
    return (S: StructureBuilder) =>
      S.listItem()
        .title(title)
        .id(name)
        .child(S.document().schemaType(name).documentId(name));
  });
