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

export const returnNextAndPreviousCursor = (current: number) => {
  let previous = 0;
  if (current === 0) {
    previous = 0;
  } else if (current > 1) {
    previous = current - 1;
  }
  return {
    previous,
    next: current++,
  };
};
