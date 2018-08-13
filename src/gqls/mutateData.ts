import gql from "graphql-tag";

export const UPDATE_CONTENT = gql`
    mutation content($fields : ContentInput!) {
        content(input: $fields)
    }
`;
