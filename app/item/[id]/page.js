import { websites } from "@/data/websites";
import { applications } from "@/data/applications";
import { datasets } from "@/data/datasets";
import { reports } from "@/data/reports";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Breadcrumb from "@/components/Breadcrumb";

const allItems = [
  ...websites,
  ...applications,
  ...datasets,
  ...reports
];

export default async function ItemPage({
  params
}) {

  const item = allItems.find(
    i => i.id === params.id
  );

  if (!item) {
    return (
      <div className="p-10">
        File tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1">

        <Topbar />

        <div className="p-8">

          <Breadcrumb
            category={item.category}
            title={item.title}
          />

          <h1 className="text-4xl font-bold">
            {item.title}
          </h1>

          <p className="text-slate-400 mt-4">
            {item.description}
          </p>

          <div className="mt-8">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <p>
                Category:
                {" "}
                {item.category}
              </p>

              <p className="mt-2">
                Size:
                {" "}
                {item.size}
              </p>

              <a
                href={item.file}
                download
                className="inline-block mt-5 bg-blue-600 px-5 py-3 rounded"
              >
                Download File
              </a>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
