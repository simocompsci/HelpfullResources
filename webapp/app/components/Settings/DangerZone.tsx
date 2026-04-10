import { ShieldAlert } from "lucide-react";

export default function DangerZone() {
  return (
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
  );
}
