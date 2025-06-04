import { defineField, defineType } from "sanity";
import pictureType from "./pictureType";

export default defineType({
  name: "project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input) => input.toLowerCase().replace(/[^A-Z]/gi, "-"),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Année",
      type: "number",
      validation: (rule) => rule.integer().min(1998),
      initialValue: 2025,
    }),
    defineField({
      name: "place",
      title: "Lieu",
      type: "string",
    }),
    defineField({
      name: "pictures",
      title: "Photographie",
      type: "array",
      of: [
        {
          type: "reference",
          to: [pictureType],
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "materials",
      title: "Matériaux",
      type: "array",
      of: [
        {
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      type: "string",
      name: "dimension",
      title: "Dimension",
    }),
  ],
  orderings: [
    {
      title: "Trier par Date",
      name: "date",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  initialValue: {
    pictures: [],
  },
});
