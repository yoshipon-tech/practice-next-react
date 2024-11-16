import Link from "next/link";
import cssModule from "@/styles/nav.module.css";
import { useState } from "react";

export default function Nav() {
  const [navIsOpen, setNavIsOppn] = useState(false);

  // 押下時にstate変更
  const toggleNav = () => {
    setNavIsOppn((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOppn(false);
  };

  return (
    <nav className={navIsOpen ? cssModule.open : cssModule.close}>
      {navIsOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
            position: fixed;
            width: 100%;
          }
        `}</style>
      )}
      <button className={cssModule.btn} onClick={toggleNav}>
        <span className={cssModule.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={cssModule.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
