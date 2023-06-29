import React, { useState } from "react";
import { SearchInput } from "./search-field";
import { api } from "y/utils/api";
import { HorizontalCard } from "../cards/horizontal-card";

type TSearch = {
  onShowResult: (isShowing: boolean) => void;
};

export function Search({ onShowResult }: TSearch) {
  const [name, setName] = useState<string>("");
  const { data } = api.marvelRouter.getCharacterByName.useQuery({
    name: name,
  });

  if (data?.characters.length) {
    onShowResult(true);
  } else {
    onShowResult(false);
  }

  return (
    <div className="flex w-full flex-col">
      <SearchInput
        onHandleSubmit={(data) => {
          setName(data.name);
        }}
        onHandleChange={(name) => setName(name)}
      />
      {data?.characters.length
        ? data?.characters.map((character) => {
            return <HorizontalCard data={character} key={character.id} />;
          })
        : null}
    </div>
  );
}
