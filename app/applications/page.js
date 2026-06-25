import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import DownloadCard from "@/components/DownloadCard";
import { applications } from "@/data/applications";

export default function ApplicationsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">
            Applications
          </h1>

          <div className="grid md:grid-cols-3 gap-5">
            {applications.map(item => (
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
