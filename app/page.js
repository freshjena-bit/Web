import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <div className="grid md:grid-cols-4 gap-5 mt-8">
            <StatsCard title="Websites" value="120" />
            <StatsCard title="Applications" value="87" />
            <StatsCard title="Datasets" value="45" />
            <StatsCard title="Reports" value="210" />
          </div>
        </div>
      </main>
    </div>
  );
    }
