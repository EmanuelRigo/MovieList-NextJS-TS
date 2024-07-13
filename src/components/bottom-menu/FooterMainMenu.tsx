"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const FooterMainMenu = () => {
  const router = useRouter();

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="rounded-lg w-full flex flex-column justify-between bg-orange-500 p-4">
      {pathname == "/" ? (
        <Link href="/list">Lista</Link>
      ) : (
        <Link href="/">Home</Link>
      )}
      <Link href="/add-movie">Sumar</Link>
    </div>
  );
};
