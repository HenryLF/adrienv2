import { defineQuery } from "next-sanity";

export const ALL_PROJECT_QUERY = defineQuery(
  `*[_type == "project"]{
  ... ,
  pictures[]->{...} ,
  video -> {... , video{asset -> {url }} }
  }`
);

export const PROJECT_QUERY = defineQuery(
  `*[_type == "project" && slug.current == $slug]{
  ... , pictures[]->{...} ,
  video -> {... , video{asset -> {url }} }
  }[0]`
);

export const BIO_QUERY = defineQuery(
  `*[_type == "bio" && _id=="bio" ]{...}[0]`
);

export const BACKGROUND_QUERY = defineQuery(
  `*[_type == "background" && _id == "background"]{...}[0]`
);

export const PORTFOLIO_URL_QUERY = defineQuery(
  `*[_type == "portfolio" && _id =="portfolio"]{ PDF {asset -> {url}}}[0].PDF.asset.url`
);

export const OSCILLOBAT_QUERY = defineQuery(
  `*[_type == "oscillobat" && _id =="oscillobat"]{
  slices[] {
    _type == "textblock" => @{... , _type},
    _type == "picture" => @->{image , alt, credit , _type},
    _type == "video" => @-> {... , video{asset -> {url }} },
    }
  }[0].slices`
);
