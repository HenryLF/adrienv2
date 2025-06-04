import type { StructureResolver } from "sanity/structure";
import {
  singletonTypeLabel,
  singletonListBuilder,
} from "./schemaTypes/singleton/sigletonType";
// https://www.sanity.io/docs/structure-builder-cheat-sheet

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (item) =>
          !singletonTypeLabel().some((type) => type.name == item.getId())
      ),
      ...singletonListBuilder().map((builder) => builder(S)),
    ]);
