import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PagesRoutes } from "y/helpers/pages-routes";
import type { CharacterSchemaType } from "y/schemas/character";
/**
 * should be used with search input
 * @returns
 */

type TListCardProps = {
  data: CharacterSchemaType;
};
export function HorizontalCard({ data }: TListCardProps) {
  return (
    <div className="mb-1 w-full">
      <Link
        href={`${PagesRoutes.character}/${data?.id}`}
        className="flex flex-row items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:flex-row"
      >
        <Image
          quality={50}
          width={50}
          height={100}
          className="h-20 rounded-t-lg object-cover md:h-20 md:w-20 md:rounded-none md:rounded-l-lg"
          src={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
          alt=""
        />
        <div className="flex flex-col justify-between pl-4 leading-normal">
          <div className="text-2xl font-thin tracking-tight text-gray-900 ">
            {data.name}
          </div>
          <div className="text-sm font-thin text-gray-700">
            {data.description}
          </div>
        </div>
      </Link>
    </div>
  );
}
