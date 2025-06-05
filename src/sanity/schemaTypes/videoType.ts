import { defineType } from "sanity";

export default defineType({
  title: "Videos",
  name: "video",
  type: "document",
  fields: [
    { title: "Titre", name: "title", type: "string" },
    {
      title: "Video",
      name: "video",
      type: "file",
    },
  ],
});
