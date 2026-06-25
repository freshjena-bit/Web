"use client";

import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import DarkModeButton from "./DarkModeButton";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileSidebar
        open={open}
        setOpen={setOpen}
      />

      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6">

        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <h1 className="font-bold">
            Public Archive Pro
          </h1>
        </div>

        <DarkModeButton />
      </header>
    </>
  );
}
