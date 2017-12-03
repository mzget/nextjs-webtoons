import gql from "graphql-tag";

// here we create a query opearation
export const List_QUERY = gql`query Programs {
    lists {
         id
         name {th en}
    }
}`;

export const Content_QUERY = gql`query contents($seasonId : String) {
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

export const Seasons_List = gql`query seasons($programId : Int!) {
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
