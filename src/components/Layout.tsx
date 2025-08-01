import type { ReactNode } from "react";
import { Navbar9 } from "./Navbar9";
import { Footer12 } from "./Footer12";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar9 />
      <main>{children}</main>
      <Footer12 />
    </>
  );
}
