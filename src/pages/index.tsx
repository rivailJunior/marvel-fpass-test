import Link from "next/link";
import {
  CarouselCards,
  HomePageBanner,
  HomeInformativeCard,
} from "y/components";
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
            see Marvel List
          </div>
        </Link>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
          <CarouselCards data={data?.characters} />
          <HomeInformativeCard />
        </div>
      </div>
    </HomePageBanner>
  );
}
