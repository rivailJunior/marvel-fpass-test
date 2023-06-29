import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  ButtonWrapper,
  IconsRightWrapper,
  InputContainerWrapper,
  InputWrapper,
  MessageErrorWrapper,
} from "./search-field.styled";

type TSearchInput = {
  onHandleSubmit: (data: TInput) => void;
  onHandleChange: (name: string) => void;
};
type TInput = {
  name: string;
};
export const SearchInput = ({
  onHandleSubmit,
  onHandleChange,
}: TSearchInput) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TInput>();

  const name = watch("name");
  onHandleChange(name);

  const onSubmit: SubmitHandler<TInput> = (data) => {
    onHandleSubmit(data);
  };
  return (
    <div className="mb-1">
      <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
        <label className="sr-only">Search</label>
        <InputContainerWrapper>
          <IconsRightWrapper>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </IconsRightWrapper>
          <InputWrapper
            type="text"
            id="simple-search"
            placeholder="Search"
            {...register("name", { required: true })}
          />
        </InputContainerWrapper>
        <ButtonWrapper type="submit">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </ButtonWrapper>
      </form>
      {errors.name && (
        <MessageErrorWrapper>This field is required</MessageErrorWrapper>
      )}
    </div>
  );
};
