import { createClient } from "microcms-js-sdk";

export const getList = async (content: string) => {
  const API_KEY = process.env.X_MICROCMS_API_KEY ? process.env.X_MICROCMS_API_KEY : "" ;
  const SERVICE_DOMAIN = process.env.SERVICE_DOMAIN ? process.env.SERVICE_DOMAIN : "" ;
  const client = createClient({
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
  });
  const res = await client.get({
    endpoint: content,
  });
  return res;
}


export default getList;
