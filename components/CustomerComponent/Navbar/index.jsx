"use client";

import "./index.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleOrder = () => {
    router.push("/customer/menu");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Tea House</h2>

      <ul className="nav-links">

        <li>
          <Link
            href="/customer"
            className={
              pathname === "/customer" ? "active-link" : "nav-link"
            }
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/customer/about"
            className={
              pathname === "/customer/about"
                ? "active-link"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/customer/menu"
            className={
              pathname === "/customer/menu"
                ? "active-link"
                : "nav-link"
            }
          >
            Menu
          </Link>
        </li>

        <li>
          <Link
            href="/customer/contact"
            className={
              pathname === "/customer/contact"
                ? "active-link"
                : "nav-link"
            }
          >
            Contact
          </Link>
        </li>

      </ul>

      <button className="order-btn" onClick={handleOrder}>
        Order Now
      </button>
    </nav>
  );
}

export default Navbar;