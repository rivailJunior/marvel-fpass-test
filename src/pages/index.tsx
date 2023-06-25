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
          <div className="float-right mb-2 cursor-pointer font-normal text-blue-600">
            See More
          </div>
        </Link>
        <CarouselCards data={data?.characters} />
      </div>
    </HomePageBanner>
  );
}
