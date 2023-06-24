import tw from "tailwind-styled-components";

export const HomePageContainerWrapper = tw.div`
flex min-h-max  flex-col items-center justify-center
`;

export const TitleWrapper = tw.h1`
mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl


`;

export const Mark = tw.mark`
	rounded bg-blue-600 px-2 text-white dark:bg-blue-500
`;

export const Paragraph = tw.p`
text-lg font-normal text-gray-500 lg:text-xl
`;

export const Dividor = tw.hr`
my-8 h-px border-0 bg-gray-200
`;
