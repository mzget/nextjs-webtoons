import gql from "graphql-tag";

// here we create a query opearation
export const List_QUERY = gql`query Programs {
    lists {
         id
         name {th en}
    }
}`;

export const Content_QUERY = gql`query contents($seasonId : String!) {
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
