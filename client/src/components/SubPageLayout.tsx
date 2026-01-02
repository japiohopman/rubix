import React from "react";
import { Link, useRoute } from "wouter";

export interface SubPageMenuLink {
  href: string;
  label: string;
}

interface SubPageLayoutProps {
  children: React.ReactNode;
  menu: SubPageMenuLink[];
  basePath: string;
}

const ActiveLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [isActive] = useRoute(href);
  return (
    <Link href={href}>
      <a
        className={`block px-4 py-2 rounded-md ${
          isActive
            ? "bg-blue-100 text-blue-700 font-semibold"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

export const SubPageLayout: React.FC<SubPageLayoutProps> = ({ children, menu, basePath }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row -mx-4">
        <aside className="w-full md:w-1/4 px-4">
          <nav className="sticky top-24">
            <ul className="space-y-2">
              {menu.map((item) => (
                <li key={item.href}>
                  <ActiveLink href={`${basePath}${item.href}`}>{item.label}</ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="w-full md:w-3/4 px-4 mt-8 md:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
};
