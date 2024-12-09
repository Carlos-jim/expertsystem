export default function Navbar() {
  return (
    <div>
      <header className="bg-[#8A4FFF] px-6 py-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">SISTEMAS EXPERTOS</h1>
        <nav className="space-x-4">
          <a href="#" className="text-white hover:text-white/90">
            Inicio
          </a>
          <a href="#" className="text-white hover:text-white/90">
            Chat
          </a>
        </nav>
      </header>
    </div>
  );
}

