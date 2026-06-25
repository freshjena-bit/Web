export default function Breadcrumb({
  category,
  title
}) {
  return (
    <div className="text-sm text-slate-400 mb-5">

      <span>Home</span>

      <span className="mx-2">/</span>

      <span>{category}</span>

      <span className="mx-2">/</span>

      <span className="text-white">
        {title}
      </span>

    </div>
  );
}
