import config from "../../config";
import dataProvider, { GraphQLClient } from "@refinedev/nestjs-query";

const client = new GraphQLClient(config.API_URL, {
  fetch: (url: string, options: RequestInit) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
      },
    });
  },
});

/**
 * Create the data provider with the custom client.
 */

export const dataProviderWithClient = dataProvider(client);
