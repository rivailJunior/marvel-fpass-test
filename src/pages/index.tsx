import Head from "next/head";
import { GridCards, Pagination } from "y/components";

import { api } from "y/utils/api";

export default function Home() {
  const { data } = api.marvelRouter.getCharacters.useQuery({
    cursor: 0,
    limit: 20,
  });

  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name="description" content="Fpass test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <GridCards data={data?.characters} />
        <div className="p-10">
          <Pagination />
        </div>
      </main>
    </>
  );
}
