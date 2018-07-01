"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
// here we create a query opearation
exports.List_QUERY = graphql_tag_1.default `
query programs {
    lists {
      _id
      name {
        th
        en
      }
    }
}`;
exports.Contents_QUERY = graphql_tag_1.default `query contents($programId: String!, $seasonNo : Int) {
  contents(programId: $programId, seasonNo: $seasonNo) {
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
  }
}`;
exports.Content_QUERY = graphql_tag_1.default `
query content($episode : Int!) {
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
    programId
  }
}`;
exports.Seasons_List = graphql_tag_1.default `
query seasons($programId : String!) {
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
exports.Season_Query = graphql_tag_1.default `
query season($programId : String!, $id: Int!) {
  season(programId: $programId, id: $id) {
    no
    name
    programId
    program {
      name {
        th
        en
      }
    }
  }
}`;
