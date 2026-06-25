"use client";

export default function SearchBar({
  value,
  setValue
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) =>
        setValue(e.target.value)
      }
      placeholder="Search files..."
      className="w-full bg-slate-900 p-3 rounded-lg border border-slate-800"
    />
  );
}
