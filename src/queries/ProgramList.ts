import gql from "graphql-tag";

// here we create a query opearation
export const List_QUERY = gql`query programs {
    lists {
      _id
      name {
        th
        en
      }
    }
}`;

export const Contents_QUERY = gql`query contents($programId: String!, $seasonId : String) {
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

export const Content_QUERY = gql`query content($episode : Int!) {
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

export const Seasons_List = gql`query seasons($programId : String!) {
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
