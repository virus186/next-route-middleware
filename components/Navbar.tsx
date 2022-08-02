import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-red-900 pt-5 pl-4">
      <ul className="flex gap-5 pb-5 mx-1 text-center text-white">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/users">
            <a>Users API</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/users/add">
            <a>Users Add</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/users/users">
            <a>Users Users</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
