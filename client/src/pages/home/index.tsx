import { useEffect, useState, useTransition } from "react";
import config from "../../../config";
import { HelloQuery } from "../../graphql/types";
import { dataProviderWithClient } from "../../providers/data-provider";
import { HELLO_QUERY } from "./queries";

export default function Home() {
  const [data, setData] = useState<HelloQuery>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      const { data: d } = await dataProviderWithClient.custom<HelloQuery>({
        url: config.API_URL,
        method: "get",
        headers: {},
        meta: {
          variables: {
            name: "John Doe",
            age: 30,
          },
          rawQuery: HELLO_QUERY,
        },
      });

      setData(d);
    };

    startTransition(() => {
      fetchData();
    });
  }, []);

  return <div>{isPending ? "Loading..." : data?.hello}</div>;
}
