import { Bell, Moon, ChevronRight } from "lucide-react";

export default function PreferencesSection() {
  return (
    <section className="flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden">
      
      <div className="flex items-center justify-between p-6 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="bg-[#f0efff] p-2.5 rounded-xl text-[#242c51]">
            <Moon size={20} />
          </div>
          <div>
            <h3 className="text-base font-mono font-semibold text-gray-900">Appearance Details</h3>
            <p className="text-sm font-mono text-gray-500">Dark mode turning on soon.</p>
          </div>
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </div>

      <div className="flex items-center justify-between p-6 hover:bg-gray-50 cursor-pointer transition-colors">
        <div className="flex items-center gap-4">
          <div className="bg-[#f0efff] p-2.5 rounded-xl text-[#242c51]">
            <Bell size={20} />
          </div>
          <div>
            <h3 className="text-base font-mono font-semibold text-gray-900">Notifications</h3>
            <p className="text-sm font-mono text-gray-500">Manage email and alert settings.</p>
          </div>
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </div>

    </section>
  );
}
