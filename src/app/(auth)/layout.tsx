"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";



const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <h1>pathname: {pathname}</h1>
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (pathname.startsWith(link.href));
        return (
          <div key={link.name} >
            <Link className={isActive ? "font-bold" : "text-blue-500"} href={link.href} key={link.name}>
              {link.name}
            </Link>
            <br />
          </div>
        );
      })}
      {children}
    </div>
  );
}
