import { defineField, defineType } from "sanity";
import pictureType from "../pictureType";
import videoType from "../videoType";

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
          name: "picture",
          to: [pictureType],
        },
        {
          title: "Vidéo",
          type: "reference",
          name: "video",
          to: [videoType],
        },
      ],
    }),
  ],
});
