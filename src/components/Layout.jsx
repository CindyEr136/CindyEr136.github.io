import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Contact } from "./Contact";

export function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Contact />
    </>
  );
}
