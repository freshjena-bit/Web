import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">
          Archive
        </h2>
      </div>

      <nav className="space-y-2 p-4">
        <Link href="/" className="block p-3 rounded-lg hover:bg-slate-800">
          Dashboard
        </Link>

        <Link href="/websites" className="block p-3 rounded-lg hover:bg-slate-800">
          Website Templates
        </Link>

        <Link href="/applications" className="block p-3 rounded-lg hover:bg-slate-800">
          Applications
        </Link>

        <Link href="/datasets" className="block p-3 rounded-lg hover:bg-slate-800">
          Datasets
        </Link>

        <Link href="/reports" className="block p-3 rounded-lg hover:bg-slate-800">
          Reports
        </Link>
      </nav>
    </aside>
  );
}
