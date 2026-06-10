"use client";

import {
  Navbar as NavbarRoot,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background py-1.5 text-center text-xs text-white font-medium">
        Not finished, don't expect funtionality.
      </div>
      <NavbarRoot className="bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/60">
        <NavbarBrand>
          <a href="/" className="cursor-pointer">
            <span className="font-bold text-[#f8bfd4]">lumin</span>
            <span className="font-bold">.rest</span>
          </a>
        </NavbarBrand>

        <NavbarContent justify="end" className="mt-4 mb-4">
          <NavbarItem>
            <a
              href="/purchase"
              className="relative text-foreground transition-colors hover:text-[#f8bfd4] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#f8bfd4] after:transition-all hover:after:w-full inline-flex items-center gap-1"
            >
              View our prices
            </a>
          </NavbarItem>
        </NavbarContent>
      </NavbarRoot>
    </div>
  );
}
