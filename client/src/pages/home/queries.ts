import gql from "graphql-tag";

export const HELLO_QUERY = gql`
  query Hello($name: String!, $age: Float!) {
    hello(name: $name, age: $age)
  }
`;
