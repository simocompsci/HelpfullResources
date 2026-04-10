import CollectionsHeader from "@/app/components/Collections/CollectionsHeader";
import CollectionsGrid from "@/app/components/Collections/CollectionsGrid";

export default function CollectionsPage() {
  return (
    <div className="w-full relative">
      <CollectionsHeader />
      <CollectionsGrid />
    </div>
  );
}