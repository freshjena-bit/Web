"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

import {
Globe,
Database,
FileText,
Package
} from "lucide-react";

function StatCard({ icon, title, value }) {
return (
<div className="
bg-slate-900/70
backdrop-blur
border border-slate-800
rounded-2xl
p-6
hover:scale-105
transition
">
<div className="mb-4">
{icon}
</div>

  <h3 className="text-slate-400">
    {title}
  </h3>

  <p className="text-3xl font-bold mt-2">
    {value}
  </p>
</div>

);
}

export default function Home() {
return (
<div className="flex">

  <Sidebar />

  <main className="flex-1">

    <Topbar />

    <div className="p-8">

      <div className="
        bg-gradient-to-r
        from-blue-600
        to-purple-600
        rounded-3xl
        p-8
        mb-8
      ">
        <h1 className="text-4xl font-bold">
          Public Archive Pro
        </h1>

        <p className="mt-3 text-lg">
          Open Source Projects, Datasets,
          Reports & Public Resources
        </p>

        <div className="flex gap-3 mt-6">
          <button className="
            bg-white
            text-black
            px-5
            py-2
            rounded-xl
          ">
            Browse Files
          </button>

          <button className="
            border
            border-white
            px-5
            py-2
            rounded-xl
          ">
            Explore
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-5">

        <StatCard
          title="Websites"
          value="120"
          icon={<Globe />}
        />

        <StatCard
          title="Applications"
          value="87"
          icon={<Package />}
        />

        <StatCard
          title="Datasets"
          value="45"
          icon={<Database />}
        />

        <StatCard
          title="Reports"
          value="210"
          icon={<FileText />}
        />

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Featured Downloads
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="
            bg-slate-900
            border border-slate-800
            rounded-2xl
            p-5
          ">
            <h3 className="font-bold">
              Next.js Starter
            </h3>

            <p className="text-slate-400 mt-2">
              Modern starter template
            </p>
          </div>

          <div className="
            bg-slate-900
            border border-slate-800
            rounded-2xl
            p-5
          ">
            <h3 className="font-bold">
              React Dashboard
            </h3>

            <p className="text-slate-400 mt-2">
              Admin dashboard template
            </p>
          </div>

          <div className="
            bg-slate-900
            border border-slate-800
            rounded-2xl
            p-5
          ">
            <h3 className="font-bold">
              Public Dataset
            </h3>

            <p className="text-slate-400 mt-2">
              Open data collection
            </p>
          </div>

        </div>

      </div>

    </div>

    <Footer />

  </main>

</div>

);
          }
