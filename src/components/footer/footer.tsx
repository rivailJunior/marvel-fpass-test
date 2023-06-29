import Link from "next/link";
import React from "react";
import { PagesRoutes } from "y/helpers/pages-routes";

export function Footer() {
  return (
    <footer className="w-full bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
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
