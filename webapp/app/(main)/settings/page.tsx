import SettingsHeader from "@/app/components/Settings/SettingsHeader";
import ProfileCard from "@/app/components/Settings/ProfileCard";
import PreferencesSection from "@/app/components/Settings/PreferencesSection";
import DangerZone from "@/app/components/Settings/DangerZone";

export default function SettingsPage() {
  return (
    <div className="w-full relative">
      <SettingsHeader />
      <div className="flex flex-col gap-6 w-full max-w-3xl m-auto">
        <ProfileCard />
        <PreferencesSection />
        <DangerZone />
      </div>
    </div>
  );
}