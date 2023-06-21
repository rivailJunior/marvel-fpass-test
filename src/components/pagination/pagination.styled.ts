import tw from "tailwind-styled-components";

export const PaginationWrapper = tw.ul`
	inline-flex items-center -space-x-px
`;

interface ItemProps {
  isMax: boolean;
  isMin: boolean;
  isActive: boolean;
}

export const PaginationItemsWrapper = tw.li<ItemProps>`
	border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700
	${(props) => (props.isMin ? "rounded-l-lg" : "")}
	${(props) => (props.isMax ? " rounded-r-lg" : "")}
	${(props) => (props.isActive ? "bg-blue-100" : "")}
`;
