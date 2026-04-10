import { User } from "lucide-react";

export default function ProfileCard() {
  return (
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
  );
}
