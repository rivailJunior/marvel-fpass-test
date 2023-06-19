import Crypto from "crypto-js/md5";
import { env } from "y/env.mjs";

export const returnDefaultParams = () => {
  const ts = +new Date();
  const hash = Crypto(
    `${ts}${env.MARVEL_PRIVATE_TOKEN}${env.MARVEL_PUBLIC_TOKEN}`
  ).toString();
  return {
    apikey: env.MARVEL_PUBLIC_TOKEN,
    hash,
    ts,
  };
};
