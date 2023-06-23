import Image from "next/image";
import React from "react";
import type { CharactersListSchemaType } from "y/schemas/character";

interface HorizontalScrollProps {
  cards: CharactersListSchemaType | undefined;
}

export const HorizontalScrollCards: React.FC<HorizontalScrollProps> = ({
  cards,
}) => {
  return (
    <div className="scrollbar-none overflow-x-auto whitespace-nowrap">
      <div className="= flex space-x-4">
        {cards?.map((card) => (
          <div
            key={card.id}
            className="w-64 flex-none rounded-lg bg-gray-100 shadow-md"
          >
            <Image
              width={300}
              height={300}
              src={`${card.thumbnail.path}.${card.thumbnail.extension}`}
              alt={card.name}
              className="h-40 w-full rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">{card.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
