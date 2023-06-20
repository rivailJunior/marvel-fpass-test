import React from "react";
import { CharacterSchemaType } from "y/schemas/character";
import { CardWrapper, TextDivWrapper } from "./card.styled";
import Image from "next/image";
import Link from "next/link";

type TCardProps = {
  data: CharacterSchemaType;
};

export function Card({ data }: TCardProps) {
  return (
    <Link href={"/character/" + data.id} className="cursor-pointer">
      <CardWrapper>
        <Image
          className="h-3/4 w-full rounded-t-lg border-b-2 border-b-gray-100"
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
          width={700}
          height={100}
        />
        <TextDivWrapper>{data.name}</TextDivWrapper>
      </CardWrapper>
    </Link>
  );
}
