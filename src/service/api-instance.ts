import axios, { AxiosError, AxiosResponse } from "axios";
import { returnDefaultParams } from "./service-utils";

const httpInstance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});

const getRequest = async (
  url: string,
  params: object
): Promise<AxiosResponse> => {
  const defaultParams = returnDefaultParams();
  return await httpInstance.get(url, {
    params: {
      ...defaultParams,
      ...params,
    },
  });
};

export { getRequest };
