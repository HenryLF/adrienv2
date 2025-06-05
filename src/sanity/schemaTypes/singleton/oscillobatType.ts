import { defineField, defineType } from "sanity";
import pictureType from "../pictureType";

export default defineType({
  name: "oscillobat",
  title: "Oscillobat",
  type: "document",
  fields: [
    defineField({
      name: "slices",
      type: "array",
      of: [
        {
          name: "textblock",
          title: "Texte",
          type: "object",
          fields: [
            defineField({
              type: "array",
              of: [{ type: "block" }],
              name: "content",
            }),
          ],
        },
        {
          title: "Photographie",
          type: "reference",
          to: [pictureType],
        },
      ],
    }),
  ],
});
