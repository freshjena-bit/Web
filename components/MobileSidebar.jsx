"use client";

import Link from "next/link";

export default function MobileSidebar({
  open,
  setOpen
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      <aside className="w-72 h-full bg-slate-950 p-5">
        <button
          onClick={() => setOpen(false)}
          className="mb-5"
        >
          ✕
        </button>

        <nav className="space-y-3">
          <Link href="/">Dashboard</Link>
          <br />
          <Link href="/websites">Websites</Link>
          <br />
          <Link href="/applications">Applications</Link>
          <br />
          <Link href="/datasets">Datasets</Link>
          <br />
          <Link href="/reports">Reports</Link>
        </nav>
      </aside>
    </div>
  );
}
