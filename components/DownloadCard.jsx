export default function DownloadCard({ item }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <h3 className="font-bold text-lg">
        {item.title}
      </h3>

      <p className="text-slate-400 mt-2">
        {item.description}
      </p>

      <div className="flex justify-between items-center mt-5">
        <span className="text-sm text-slate-500">
          {item.size}
        </span>

        <a
          href={item.file}
          download
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Download
        </a>
      </div>
    </div>
  );
}
