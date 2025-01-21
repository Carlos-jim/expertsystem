import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <header className="bg-[#8A4FFF] px-6 py-4 flex justify-between items-center">
        <Link href={"/home"}>
          <h1 className="text-white text-xl font-bold">SISTEMAS EXPERTOS</h1>
        </Link>
        <nav className="space-x-4 flex">
          <Link href={"/home"}>
            <p className="text-white hover:text-white/90">Inicio</p>
          </Link>
          <Link href={"/home/chat"}>
            <p className="text-white hover:text-white/90">Chat</p>
          </Link>
        </nav>
      </header>
    </div>
  );
}
