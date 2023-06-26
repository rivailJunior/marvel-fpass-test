import Link from "next/link";
import { CarouselCards, HomePageBanner } from "y/components";
import { api } from "y/utils/api";

export default function Home() {
  const { data } = api.marvelRouter.getCharacters.useQuery({
    limit: 10,
    cursor: 0,
  });
  return (
    <HomePageBanner>
      <div className="flex flex-col">
        <Link href={"/characters/0"}>
          <div className="float-right mb-0 cursor-pointer font-normal text-blue-600">
            See More
          </div>
        </Link>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
          <CarouselCards data={data?.characters} />
          <div>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Marvel is one of the world's most prominent character-based
              entertainment companies, built on a proven library of more than
              8,000 characters featured in a variety of media over seventy-five
              years. Marvel utilizes its character franchises in entertainment,
              licensing and publishing. For more information visit marvel.com. ©
              2023 MARVEL
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              With a portfolio of over 9,000 characters we ARE the comic
              industry leaders. Marvel Entertainment has the tools, creative
              staff and experience to create truly original programs that convey
              the essence of your brand's message and take consumers to a whole
              new world. As the media landscape is forever changing and growing,
              Marvel is continuously on the forefront, creating new and
              innovative ways to share our partner's stories through our print,
              custom and digital vehicles.
            </p>
          </div>
        </div>
      </div>
    </HomePageBanner>
  );
}
