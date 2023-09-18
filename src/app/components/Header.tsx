"use client";

import React, { useState } from "react";
import Image from "next/image";

// Authenticate
import { signIn, signOut, useSession } from "next-auth/react";

// Icons
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status, data } = useSession();

  const handleSignIn = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 flex justify-between items-center">
      <Image src="/logo.webp" width={60} height={20} alt="Valorant logo" />

      {status === "unauthenticated" && (
        <button className="text-sm font-semibold" onClick={handleSignIn}>
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-5 border-light border-solid border p-2 rounded-full relative">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />
          <Image
            src={data.user.image!}
            width={32}
            height={32}
            alt={data.user.name!}
            className="rounded-full"
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-8 left-0 w-full h-[100px] bg-dark rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary pt-2 text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
