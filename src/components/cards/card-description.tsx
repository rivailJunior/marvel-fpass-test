import React from "react";
import {
  BodyContainerWrapper,
  CardHeaderInformationWrapper,
  ContainerWrapper,
  ImageContainerWrapper,
  TextTitleWrapper,
  TextValueWrapper,
} from "../../components/cards/charater.styled";
import { CharacterSchemaType } from "y/schemas/character";
import Image from "next/image";

type TCardDescriptionProps = {
  data: CharacterSchemaType | undefined;
};

const TextComponent = ({
  title,
  value,
}: {
  title?: string;
  value?: string;
}) => {
  return (
    <>
      {title && <TextTitleWrapper>{title}</TextTitleWrapper>}
      {value && <TextValueWrapper>{value}</TextValueWrapper>}
    </>
  );
};

export function CardDescription({ data }: TCardDescriptionProps) {
  return (
    <ContainerWrapper>
      <CardHeaderInformationWrapper>
        Character Information
      </CardHeaderInformationWrapper>
      <BodyContainerWrapper>
        <div>
          {data?.thumbnail && (
            <ImageContainerWrapper>
              <Image
                width={500}
                height={500}
                src={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
                alt="Profile"
                className="h-3/5 w-3/5 rounded-2xl"
              />
            </ImageContainerWrapper>
          )}
          <TextComponent title="name" value={data?.name || ""} />
        </div>
        <div>
          <TextComponent title="Comics" />
          {data?.comics.items.map((item) => {
            return <TextComponent key={item.name} value={item.name} />;
          })}
        </div>
        <div>
          <TextComponent title="Séries" />
          {data?.series.items.map((item) => {
            return <TextComponent key={item.name} value={item.name} />;
          })}
        </div>
        <div>
          <TextComponent title="Stories" />
          {data?.stories.items.map((item) => {
            return <TextComponent key={item.name} value={item.name} />;
          })}
        </div>
      </BodyContainerWrapper>
    </ContainerWrapper>
  );
}
