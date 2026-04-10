export default function SettingsHeader() {
  return (
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
  );
}
