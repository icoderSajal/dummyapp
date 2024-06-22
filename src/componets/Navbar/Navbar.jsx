"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import classes from "./navbar.module.css";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => setShowDropdown((prev) => true);

  const handleHideDropdown = () => setShowDropdown((prev) => false);

  const loggedIn = false;
  const items = [{ id: 1, name: "Login", path: "/login" }];
  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.left}>
            <Link href="/">WebDevMania</Link>
          </h2>
          <ul className={classes.right}>
            {items ? (
              items.map((val, i) => (
                <>
                  <ul>
                    <Link href={val.path}>
                      <li style={{ color: "blue" }}>{val.name}</li>
                    </Link>
                  </ul>
                </>
              ))
            ) : (
              <h1 className="">NO Data</h1>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
