import { User, Bell, Moon, ShieldAlert, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="w-full relative">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 w-full max-w-3xl m-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-black mb-4">
            SETTINGS
          </h1>
          <p className="text-[#515981] font-mono text-sm md:text-base">
            Customize your experience and manage your account preferences.
          </p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="flex flex-col gap-6 w-full max-w-3xl m-auto">
        
        {/* Profile Card */}
        <section className="flex flex-col bg-white border border-gray-200 rounded-3xl p-6">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="bg-[#f0efff] p-3 rounded-2xl text-[#242c51]">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-xl font-mono font-semibold text-gray-900">Profile Information</h2>
              <p className="text-sm font-mono text-gray-500 mt-1">Update your personal details here.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              <div>
                <span className="text-sm font-mono font-medium text-gray-900 block">Full Name</span>
                <span className="text-sm font-mono text-gray-500">John Doe</span>
              </div>
              <button className="text-sm font-mono font-semibold text-[#0a79ff] hover:text-[#096ae0] bg-[#f0efff] hover:bg-[#e4e2fd] px-4 py-2 rounded-xl transition-colors w-fit">
                Edit
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mt-2">
              <div>
                <span className="text-sm font-mono font-medium text-gray-900 block">Email Address</span>
                <span className="text-sm font-mono text-gray-500">john.doe@example.com</span>
              </div>
              <button className="text-sm font-mono font-semibold text-[#0a79ff] hover:text-[#096ae0] bg-[#f0efff] hover:bg-[#e4e2fd] px-4 py-2 rounded-xl transition-colors w-fit">
                Edit
              </button>
            </div>
          </div>
        </section>

        {/* Preferences / Notifications */}
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

        {/* Danger Zone */}
        <section className="flex flex-col bg-white border border-red-100 rounded-3xl p-6 ">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-red-50 p-2.5 rounded-xl text-red-500">
              <ShieldAlert size={20} />
            </div>
            <h2 className="text-base font-mono font-semibold text-gray-900">Danger Zone</h2>
          </div>
          <p className="text-sm font-mono text-gray-500 mb-6 mt-1 ml-[52px]">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <div className="flex ml-[52px]">
            <button className="font-mono bg-red-50 text-red-600 hover:bg-red-100 font-semibold py-2.5 px-6 rounded-xl text-sm transition-all active:scale-95">
              Delete Account
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}