import Image from "next/image";
import React, { useEffect } from "react";
import type { CharactersListSchemaType } from "y/schemas/character";
import "./carousel-helper";
import { carouselHelper } from "./carousel-helper";
import { Carousel } from "flowbite";

type TCarouselProps = {
  data: CharactersListSchemaType | undefined;
};

export function CarouselCards({ data }: TCarouselProps) {
  useEffect(() => {
    if (data?.length) {
      const { items, options } = carouselHelper();
      const carousel = new Carousel(items, options);
      const $prevButton = document.getElementById("data-carousel-prev");
      const $nextButton = document.getElementById("data-carousel-next");

      $prevButton?.addEventListener("click", () => {
        carousel.prev();
      });

      $nextButton?.addEventListener("click", () => {
        carousel.next();
      });
    }
  }, [data]);
  return (
    <div className="relative w-full">
      <div className="relative h-96 overflow-hidden rounded-lg sm:h-64 xl:h-144">
        {data?.slice(0, 4).map((character, index) => {
          return (
            <div
              key={index}
              id={`carousel-item-${index + 1}`}
              className="hidden duration-700 ease-in-out"
            >
              <Image
                alt={character.name}
                width={500}
                height={500}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {data?.slice(0, 4).map((item, index) => {
          return (
            <button
              key={index}
              id={`carousel-indicator-${index + 1}`}
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
            ></button>
          );
        })}
      </div>
      <button
        id="data-carousel-prev"
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        id="data-carousel-next"
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
}
