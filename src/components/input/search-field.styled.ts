import tw from "tailwind-styled-components";

export const InputContainerWrapper = tw.div`
	relative w-full
`;
export const IconsRightWrapper = tw.div`
pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3
`;

export const InputWrapper = tw.input`
block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
`;

export const ButtonWrapper = tw.button`
ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
`;

export const MessageErrorWrapper = tw.div`"mt-1 rounded-lg text-left font-thin text-red-600`;
