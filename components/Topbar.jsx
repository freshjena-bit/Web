export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-6">
      <h1 className="font-bold text-xl">
        Public Archive Pro
      </h1>

      <input
        type="text"
        placeholder="Search..."
        className="bg-slate-900 px-4 py-2 rounded-lg outline-none"
      />
    </header>
  );
}
