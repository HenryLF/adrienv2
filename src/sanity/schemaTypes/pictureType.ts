import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "picture",
  title: "Photographie",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Texte Alternatif",
      type: "string",
      validation: (rule) => rule.required(),
      initialValue: "Une oeuvre réalisée par Adrien Milon",
    }),
    defineField({
      name: "credit",
      title: "Crédit photo",
      type: "string",
      validation: (rule) => rule.required(),
      initialValue: "Adrien Milon",
    }),
  ],
});
