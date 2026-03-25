export default function NavBar() {
  return (
    <nav className="flex items-center gap-6 px-6 md:px-16 py-6 rounded-full backdrop-blur-xl bg-gray-200 border border-gray-300">
      {/* Links */}
      <ul className="flex gap-4 text-sm md:gap-8  md:text-base lg:text-xl font-medium">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Collections</li>
        <li className="cursor-pointer">AI Search</li>
        <li className="cursor-pointer">Settings</li>
      </ul>
    </nav>
  );
}
