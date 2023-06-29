import React, { useState } from "react";
import { SearchInput } from "./search-field";
import { api } from "y/utils/api";
import { HorizontalCard } from "../cards/horizontal-card";

export function Search() {
  const [name, setName] = useState<string>("");
  const { data } = api.marvelRouter.getCharacterByName.useQuery({
    name: name,
  });
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
