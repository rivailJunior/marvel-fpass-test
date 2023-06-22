import { useRouter } from "next/router";
import { GridCards, Pagination } from "y/components";
import { api } from "y/utils/api";

export default function Home() {
  const router = useRouter();
  const cursor =
    typeof router?.query?.index === "string" ? parseInt(router.query.index) : 0;
  console.log("cursor page", cursor);
  const { data } = api.marvelRouter.getCharacters.useQuery({
    limit: 20,
    cursor,
  });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <GridCards data={data?.characters} />
      {data?.characters && (
        <div className="p-10">
          <Pagination
            offset={cursor}
            paginationItems={5}
            totalPages={data?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
