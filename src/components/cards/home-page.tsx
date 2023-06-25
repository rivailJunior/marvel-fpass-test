import React from "react";
import {
  Dividor,
  HomePageContainerWrapper,
  Paragraph,
  Mark,
  TitleWrapper,
} from "./home-page.styled";

export function HomePageBanner({ children }: { children: React.ReactNode }) {
  return (
    <HomePageContainerWrapper>
      <div>
        <TitleWrapper>
          Would you like to know about your fav <Mark>Characters</Mark> ?
        </TitleWrapper>
        <Paragraph>
          we built this platform to let you know inside what happens at your
          favorite characters life.
        </Paragraph>
        <Dividor />
        <div className="min-w-min">{children}</div>
      </div>
    </HomePageContainerWrapper>
  );
}
