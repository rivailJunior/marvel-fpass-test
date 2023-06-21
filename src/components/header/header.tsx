import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-lg font-semibold text-white">Marvel</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
