"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
// here we create a query opearation
exports.List_QUERY = graphql_tag_1.default `query programs {
    lists {
      _id
      name {
        th
        en
      }
    }
}`;
exports.Contents_QUERY = graphql_tag_1.default `query contents($programId: String!, $seasonId : String) {
  contents(programId: $programId, seasonId: $seasonId) {
    _id
    name {
      th
      en
    }
    epNo
    epName {
      th
      en
    }
    src
    seasonId
    season {
      _id
      name
      no
      programId
    }
    programId
  }
}`;
exports.Content_QUERY = graphql_tag_1.default `query content($episode : Int!) {
  content(episode: $episode) {
    _id
    name {
      th
      en
    }
    epNo
    epName {
      th
      en
    }
    src
    seasonId
    season {
      _id
      name
      no
      programId
    }
    programId
  }
}`;
exports.Seasons_List = graphql_tag_1.default `query seasons($programId : String!) {
  seasons(programId: $programId) {
    _id
    no
    name
    programId
    program {
      _id
      name {
        th
        en
      }
    }
  }
}
`;
