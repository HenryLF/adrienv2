import { StructureBuilder } from "sanity/structure";
import bioType from "./bioType";
import backgroundType from "./backgroundType";
import portfolioType from "./portfolioType";

export const singletonTypeList = [bioType, backgroundType, portfolioType];

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
