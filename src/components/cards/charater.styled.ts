import tw from "tailwind-styled-components";

export const ContainerWrapper = tw.div`
	container mx-auto py-8
	> div {
		rounded-lg bg-white px-8 py-6 shadow
	}
`;

export const CardHeaderInformationWrapper = tw.div`
	mb-6 flex items-center justify-between
	> h2 {
		text-2xl font-semibold
	}
`;

export const BodyContainerWrapper = tw.div`
	grid grid-cols-1 gap-8 md:grid-cols-2
`;

export const ImageContainerWrapper = tw.div`
	mb-4 flex items-center justify-start
`;

export const TextTitleWrapper = tw.div`
	mb-2 text-gray-500
`;
export const TextValueWrapper = tw.div`
	text-lg font-semibold
`;
