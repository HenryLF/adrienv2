import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "bio",
  title: "Biographie",
  fields: [
    defineField({
      name: "head",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "main",
      title: "Biographie",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
