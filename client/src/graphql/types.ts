import type * as Types from "./schema.types";

export type HelloQueryVariables = Types.Exact<{
  name: Types.Scalars["String"]["input"];
  age: Types.Scalars["Float"]["input"];
}>;

export type HelloQuery = Pick<Types.Query, "hello">;
