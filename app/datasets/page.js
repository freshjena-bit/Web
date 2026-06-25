import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import DownloadCard from "@/components/DownloadCard";
import { datasets } from "@/data/datasets";

export default function DatasetsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">
            Datasets
          </h1>

          <div className="grid md:grid-cols-3 gap-5">
            {datasets.map(item => (
              <DownloadCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
