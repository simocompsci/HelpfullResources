"use client";

import { useState } from "react";
import CollectionsHeader from "@/app/components/Collections/CollectionsHeader";
import CollectionsGrid from "@/app/components/Collections/CollectionsGrid";

export default function CollectionsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full relative">
      <CollectionsHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CollectionsGrid searchQuery={searchQuery} />
    </div>
  );
}