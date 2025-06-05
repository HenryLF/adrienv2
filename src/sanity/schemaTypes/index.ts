import { type SchemaTypeDefinition } from "sanity";
import projectType from "./projectType";
import pictureType from "./pictureType";
import { singletonTypeList } from "./singleton/sigletonType";
import videoType from "./videoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, pictureType, videoType, ...singletonTypeList],
};
