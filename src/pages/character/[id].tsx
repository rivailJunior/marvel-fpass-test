import {
  GetStaticPaths,
  GetStaticPropsContext,
  type InferGetStaticPropsType,
} from "next";
import { serverSideHelpers } from "../api/trpc/[trpc]";
import { api } from "y/utils/api";
import { CardDescription } from "y/components";

export default function Character(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { id } = props;
  const { data } = api.marvelRouter.getCharacterById.useQuery({ id });

  return <CardDescription data={data?.character} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await serverSideHelpers.marvelRouter.getCharacters.fetch({
    limit: 20,
    cursor: 0,
  });
  const paths = data?.characters.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const id = context.params?.id as string;

  await serverSideHelpers.marvelRouter.getCharacterById.prefetch({
    id,
  });
  return {
    props: {
      trpcState: serverSideHelpers.dehydrate(),
      id,
    },
  };
};
