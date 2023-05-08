'use client';

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Menu from './userMenu'

function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div 
      className="
      py-4 border-b-[1px]
      "
      >
        <Container>
          <div 
          className="
          flex flex-row items-center justify-between px-6 md:px-3
           "
           >
            <Logo />
            <Search />
            <Menu/>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
