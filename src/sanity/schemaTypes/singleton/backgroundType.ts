import { defineField, defineType } from "sanity";

export default defineType({
  name: "background",
  type: "document",
  title: "Fond du site",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Fond du site",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
