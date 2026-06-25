"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import SearchBar from "@/components/SearchBar";
import DownloadCard from "@/components/DownloadCard";

import { websites } from "@/data/websites";

export default function WebsitesPage() {

  const [search, setSearch] =
    useState("");

  const filtered =
    websites.filter(item =>
      item.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1">

        <Topbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-5">
            Website Templates
          </h1>

          <SearchBar
            value={search}
            setValue={setSearch}
          />

          <div className="grid md:grid-cols-3 gap-5 mt-5">

            {filtered.map(item => (
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
