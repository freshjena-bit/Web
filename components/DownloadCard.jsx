import Link from "next/link";

export default function DownloadCard({
  item
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

      <h3 className="font-bold text-lg">
        {item.title}
      </h3>

      <p className="text-slate-400 mt-2">
        {item.description}
      </p>

      <div className="flex gap-2 mt-5">

        <Link
          href={`/item/${item.id}`}
          className="bg-slate-700 px-4 py-2 rounded"
        >
          Detail
        </Link>

        <a
          href={item.file}
          download
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Download
        </a>

      </div>

    </div>
  );
}
