import React from "react";
import type { CharacterSchemaType } from "y/schemas/character";
import { CardWrapper, TextDivWrapper } from "./card.styled";
import Image from "next/image";
import Link from "next/link";
import { PagesRoutes } from "y/helpers/pages-routes";

type TCardProps = {
  data: CharacterSchemaType;
};

export function Card({ data }: TCardProps) {
  return (
    data?.id && (
      <Link
        data-testid={data.name}
        href={`${PagesRoutes.character}/${data.id}`}
        className="cursor-pointer"
      >
        <CardWrapper>
          <Image
            className="h-4/5 w-full rounded-t-lg border-b-2 border-b-gray-100"
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt={data.name}
            width={700}
            height={200}
          />
          <TextDivWrapper>{data.name}</TextDivWrapper>
        </CardWrapper>
      </Link>
    )
  );
}
