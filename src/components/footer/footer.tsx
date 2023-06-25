import Link from "next/link";
import React from "react";
import { PagesRoutes } from "y/helpers/pages-routes";

export function Footer() {
  return (
    <footer className="mt-24 w-full shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href={PagesRoutes.personalSite}
            className="mb-4 flex items-center sm:mb-0"
          >
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Fpass
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link
                href={PagesRoutes.characters}
                className="mr-4 text-blue-600 hover:underline md:mr-6"
              >
                Characters
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <Link
            href={PagesRoutes.personalSite}
            className="text-blue-600 hover:underline"
          >
            Rivail Pinto
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
