import Link from "next/link";
import React from "react";
import { PagesRoutes } from "y/helpers/pages-routes";

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href={PagesRoutes.home}>
          <h1 className="text-lg font-semibold text-white">Marvel</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href={PagesRoutes.home}
                className="text-white hover:text-gray-300"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
