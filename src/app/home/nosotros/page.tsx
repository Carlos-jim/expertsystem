"use client"
import Head from "next/head";
import Image from "next/image";
import { downloadCVCarlos, downloadCVSebas, downloadCVJose } from "@/utils/downloadCV";

const DevelopersPage = () => {
  const developers = [
    {
      name: "Carlos Jimenez",
      role: "Frontend Developer",
      image: "/assets/carlos.jpeg",
      cv: downloadCVCarlos,
      emoji: "🧑💻",
      color: "#bb9af7",
    },
    {
      name: "Sebastián Mata",
      role: "Backend Developer",
      image: "/assets/sebastian.jpg",
      cv: downloadCVSebas,
      emoji: "🧑💻",
      color: "#bb9af7",
    },
    {
      name: "Jose Silva",
      role: "Backend Developer",
      image: "/assets/jose.jpeg",
      cv: downloadCVJose,
      emoji: "🧑🎨",
      color: "#bb9af7",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1b26] text-[#a9b1d6]">
      <Head>
        <title>Equipo de Desarrolladores 🌌</title>
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-[#7aa2f7]">
          🌟 Nuestro Equipo de Desarrolladores 🌌
        </h1>

        <p className="mb-12 text-lg">
          Bienvenido/a al equipo detrás de este proyecto. Aquí encontrarás
          información sobre cada miembro y su rol en el desarrollo. 🚀
        </p>

        <div className="space-y-12">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-[#1a1b26] rounded-2xl p-6 neomorphic-shadow hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={dev.image}
                  alt={`Foto de ${dev.name}`}
                  width={150}
                  height={150}
                  className="rounded-full border-2 border-[#7aa2f7] mb-6"
                />
                <h2
                  className={`text-2xl font-bold mb-2`}
                  style={{ color: dev.color }}
                >
                  {dev.name} {dev.emoji}
                </h2>
                <h3 className="text-xl mb-4 text-[#9ece6a]">
                  {dev.role} {dev.role.includes("Frontend") ? "🖥️" : "💻"}
                </h3>
                <a
                  onClick={typeof dev.cv === "function" ? dev.cv : undefined}
                  className="text-[#7aa2f7] font-bold hover:underline cursor-pointer"
                >
                  Ver currículum de {dev.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-[#7dcfff] text-lg">
          <h2 className="text-2xl font-bold mb-4">
            🙏 ¡Gracias por revisar nuestro repositorio! 🙏
          </h2>
          <p>
            Esperamos que disfrutes explorando nuestro proyecto. Si tienes
            alguna pregunta o sugerencia, no dudes en contactarnos.❤️✨
          </p>
        </div>
      </main>
    </div>
  );
};

export default DevelopersPage;
