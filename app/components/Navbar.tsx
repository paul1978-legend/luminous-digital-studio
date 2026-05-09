export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="font-bold text-xl">
          Luminous Digital Studio
        </a>

        <div className="flex gap-6 text-sm">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}