import gql from "graphql-tag";

// here we create a query opearation
export const ProgramListQUERY = gql`
query programs {
    lists {
      _id
      name {
        th
        en
      }
    }
}`;

export const ContentsQUERY = gql`query contents($programId: String!, $seasonNo : Int) {
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

export const ContentQUERY = gql`
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

export const SeasonsQuery = gql`
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

export const SeasonQuery = gql`
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
