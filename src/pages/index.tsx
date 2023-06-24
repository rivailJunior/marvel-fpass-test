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
      <Link href={"/characters/0"} className="mb-7 font-thin text-blue-600">
        See More
      </Link>
      <CarouselCards data={data?.characters} />
    </HomePageBanner>
  );
}
