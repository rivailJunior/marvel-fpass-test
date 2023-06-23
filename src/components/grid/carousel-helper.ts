import type { CarouselItem, CarouselOptions } from "flowbite";

export const carouselHelper = () => {
  const items: CarouselItem[] = [
    {
      position: 0,
      el: document.getElementById("carousel-item-1") as HTMLElement,
    },
    {
      position: 1,
      el: document.getElementById("carousel-item-2") as HTMLElement,
    },
    {
      position: 2,
      el: document.getElementById("carousel-item-3") as HTMLElement,
    },
    {
      position: 3,
      el: document.getElementById("carousel-item-4") as HTMLElement,
    },
  ];

  const options: CarouselOptions = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
      activeClasses: "bg-white dark:bg-gray-800",
      inactiveClasses:
        "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
      items: [
        {
          position: 0,
          el: document.getElementById("carousel-indicator-1") as HTMLElement,
        },
        {
          position: 1,
          el: document.getElementById("carousel-indicator-2") as HTMLElement,
        },
        {
          position: 2,
          el: document.getElementById("carousel-indicator-3") as HTMLElement,
        },
        {
          position: 3,
          el: document.getElementById("carousel-indicator-4") as HTMLElement,
        },
      ],
    },

    // callback functions
    onNext: () => {
      console.log("next slider item is shown");
    },
    onPrev: () => {
      console.log("previous slider item is shown");
    },
    onChange: () => {
      console.log("new slider item has been shown");
    },
  };

  return {
    items,
    options,
  };
};
