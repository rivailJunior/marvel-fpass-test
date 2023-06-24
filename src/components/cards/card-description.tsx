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
  testId,
}: {
  title?: string;
  value?: string;
  testId?: string;
}) => {
  return (
    <>
      {title && <TextTitleWrapper>{title}</TextTitleWrapper>}
      {value && (
        <TextValueWrapper data-testid={testId}>{value}</TextValueWrapper>
      )}
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
          <TextComponent title="Character Name" value={data?.name || ""} />
        </div>
        <div>
          <TextComponent title="Comics" />
          {data?.comics.items.map((item) => {
            return (
              <TextComponent
                testId="comics"
                key={item.name}
                value={item.name}
              />
            );
          })}
        </div>
        <div>
          <TextComponent title="Séries" />
          {data?.series.items.map((item) => {
            return (
              <TextComponent
                testId="series"
                key={item.name}
                value={item.name}
              />
            );
          })}
        </div>
        <div>
          <TextComponent title="Stories" />
          {data?.stories.items.map((item) => {
            return (
              <TextComponent
                testId="stories"
                key={item.name}
                value={item.name}
              />
            );
          })}
        </div>
      </BodyContainerWrapper>
    </ContainerWrapper>
  );
}
