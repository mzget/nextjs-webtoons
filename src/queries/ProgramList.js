"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
// here we create a query opearation
exports.List_QUERY = graphql_tag_1.default `query Programs {
    lists {
         id
         name {th en}
    }
}`;
exports.Contents_QUERY = graphql_tag_1.default `query contents($seasonId : String) {
  contents(seasonId: $seasonId) {
    id
    name {
      th
      en
    }
    seasonId
    epNo
    epName {
      th
      en
    }
    src
    season {
    id
    name
    no
    programId
    }
  }
}`;
exports.Content_QUERY = graphql_tag_1.default `query content($episode : Int!) {
  content(episode: $episode) {
    id
    name {
      th
      en
    }
    seasonId
    epNo
    epName {
      th
      en
    }
    src
    season {
    id
    name
    no
    programId
    }
  }
}`;
exports.Seasons_List = graphql_tag_1.default `query seasons($programId : Int!) {
  seasons(programId: $programId) {
    id
    no
    name
    programId
    program {
      id
      name {
        th
        en
      }
    }
  }
}
`;
