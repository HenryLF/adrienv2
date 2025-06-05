import { defineQuery } from "next-sanity";

export const ALL_PROJECT_QUERY = defineQuery(
  `*[_type == "project"]{... , pictures[]->{...}}`
);

export const PROJECT_QUERY = defineQuery(
  `*[_type == "project" && slug.current == $slug]{... , pictures[]->{...}}[0]`
);

export const BIO_QUERY = defineQuery(
  `*[_type == "bio" && _id=="bio" ]{...}[0]`
);

export const BACKGROUND_QUERY = defineQuery(
  `*[_type == "background" && _id == "background"]{...}[0]`
);

export const PORTFOLIO_QUERY = defineQuery(
  `*[_type == "portfolio" && _id =="portfolio"]{..., asset-> {url}}[0]`
);

