import React from "react";
import type { CharactersListSchemaType } from "y/schemas/character";
import { GridWrapper } from "./grid.styled";
import { Card } from "../cards/card";

type TGridProps = {
  data: CharactersListSchemaType | undefined;
};
export function GridCards({ data }: TGridProps) {
  return (
    <GridWrapper>
      {data?.map((character) => {
        return <Card data={character} key={character.id} />;
      })}
    </GridWrapper>
  );
}
