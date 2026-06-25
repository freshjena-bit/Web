import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      className="
      hidden
      md:block
      w-64
      bg-slate-950
      border-r
      border-slate-800
      min-h-screen
    "
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold">
          Archive
        </h2>
      </div>

      <nav className="p-4 space-y-2">

        <Link href="/" className="block p-3 hover:bg-slate-800 rounded">
          Dashboard
        </Link>

        <Link href="/websites" className="block p-3 hover:bg-slate-800 rounded">
          Websites
        </Link>

        <Link href="/applications" className="block p-3 hover:bg-slate-800 rounded">
          Applications
        </Link>

        <Link href="/datasets" className="block p-3 hover:bg-slate-800 rounded">
          Datasets
        </Link>

        <Link href="/reports" className="block p-3 hover:bg-slate-800 rounded">
          Reports
        </Link>

      </nav>
    </aside>
  );
}
