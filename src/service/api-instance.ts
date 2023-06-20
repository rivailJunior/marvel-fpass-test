import axios, { AxiosResponse } from "axios";
import { returnDefaultParams } from "./service-utils";
import { MarvelSchemaType } from "y/schemas/character";

const httpInstance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});

const getRequest = async (
  url: string,
  params: object
): Promise<AxiosResponse<MarvelSchemaType>> => {
  const defaultParams = returnDefaultParams();
  return await httpInstance.get(url, {
    params: {
      ...defaultParams,
      ...params,
    },
  });
};

export { getRequest };
