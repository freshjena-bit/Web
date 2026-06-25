import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold">
          404
        </h1>

        <p className="mt-4 text-slate-400">
          Halaman tidak ditemukan
        </p>

        <Link
          href="/"
          className="inline-block mt-6 bg-blue-600 px-4 py-2 rounded"
        >
          Kembali
        </Link>

      </div>

    </div>
  );
}
