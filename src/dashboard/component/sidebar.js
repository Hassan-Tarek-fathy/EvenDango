import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  HomeIcon,
  FireIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const UserLink = currentPath.includes("users");
  const mainLinks = [
    {
      name: "Home",
      link: "/dashboard",
      icon: HomeIcon,
      current:
        currentPath == "/dashboard" || currentPath == "/dashboard/"
          ? true
          : false,
    },
    {
      name: "Users",
      link: "/dashboard/users",
      icon: UserGroupIcon,
      current: UserLink ? true : false,
    },
  ];
  return (
    <div className="hidden lg:block lg:col-span-3 xl:col-span-2 bg-white p-4 shadow">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="space-y-1 pb-8">
          {mainLinks.map((link) => (
            <a
              href={link.link}
              key={link.name}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                link.current
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <link.icon className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
              <span className="truncate">{link.name}</span>
            </a>
          ))}
        </div>
        <div className="pt-10">
          <p
            className="px-3 text-sm font-medium text-gray-500"
            id="communities-headline"
          >
            Super Admin
          </p>
          <div
            className="mt-3 space-y-2"
            aria-labelledby="communities-headline"
          >
            <a
              href="/dashboard/users"
              className="group flex items-center rounded-md px-3 py-2 text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-50"
            >
              <span className="truncate">{currentPath}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
