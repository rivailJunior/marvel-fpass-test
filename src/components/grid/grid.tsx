import React from "react";
import { CharactersListSchemaType } from "y/schemas/character";
import { GridWrapper, SimpleCardWrapper } from "./grid.styled";

type TGridProps = {
  data: CharactersListSchemaType | undefined;
};
export default function GridCards({ data }: TGridProps) {
  return (
    <GridWrapper>
      {data?.map((character) => {
        return (
          <SimpleCardWrapper key={character.id}>
            {character.name}
          </SimpleCardWrapper>
        );
      })}
    </GridWrapper>
  );
}
