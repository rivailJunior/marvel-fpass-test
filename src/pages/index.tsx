import Link from "next/link";
import { useRouter } from "next/router";
import { HorizontalScrollCards } from "y/components";
import { api } from "y/utils/api";

export default function Home() {
  const { data } = api.marvelRouter.getCharacters.useQuery({
    limit: 10,
    cursor: 0,
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="mb-8 text-4xl font-bold">Welcome!!</h2>
          <p className="text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            neque vel velit convallis rutrum. Nullam at mauris eget sem dictum
            vestibulum. Nunc et suscipit erat. Ut eu magna ut mauris finibus
            maximus. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Quisque dapibus lacus sit amet metus
            rutrum, et volutpat neque sagittis.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-800 p-8 shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              neque vel velit convallis rutrum.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-8 shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Feature 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              neque vel velit convallis rutrum.
            </p>
          </div>
        </section>
        <section className="pt-10">
          <Link href={`/characters/${encodeURIComponent(0)}`}>See More</Link>
          <HorizontalScrollCards cards={data?.characters} />
        </section>
      </main>
    </div>
  );
}
