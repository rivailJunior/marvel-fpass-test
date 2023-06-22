import Link from "next/link";
import { CarouselCards } from "y/components";
import { api } from "y/utils/api";

export default function Home() {
  const { data } = api.marvelRouter.getCharacters.useQuery({
    limit: 10,
    cursor: 0,
  });

  return (
    <div className="flex min-h-max  flex-col items-center justify-center">
      <div className="container">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Would you like to know about your fav{" "}
          <mark className="rounded bg-blue-600 px-2 text-white dark:bg-blue-500">
            Characters
          </mark>{" "}
          ?
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl">
          we built this platform to let you know inside what happens at your
          favorite characters life.
        </p>
        <hr className="my-8 h-px border-0 bg-gray-200 "></hr>
        <div className="min-w-min">
          <CarouselCards data={data?.characters} />
        </div>
      </div>
    </div>
  );
}
