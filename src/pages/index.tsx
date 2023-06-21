import { GridCards, Pagination } from "y/components";
import { api } from "y/utils/api";

export default function Home() {
  const { data } = api.marvelRouter.getCharacters.useQuery({
    cursor: 0,
    limit: 20,
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <GridCards data={data?.characters} />
      <div className="p-10">
        <Pagination
          offset={1}
          paginationItems={5}
          totalPages={data?.totalPages}
        />
      </div>
    </div>
  );
}
