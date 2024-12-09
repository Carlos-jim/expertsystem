"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/menu/navbar";
import Image from "next/image";
import Robot from "../../../public/logo/robot.png";
import Link from "next/link";

export default function ExpertSystem() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        textRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4" // Overlap animations
      )
      .from(
        buttonRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar></Navbar>

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Este es el mejor sistema experto que podrás encontrar
            </h2>
            <p
              ref={textRef}
              className="text-lg text-gray-600 pb-6"
            >
              Ten una maravillosa charla con nuestro sistema experto
            </p>
            <Link href={"/home/chat"}>
              <Button
                ref={buttonRef}
                className="bg-[#8A4FFF] hover:bg-[#7B45E7] text-white px-6 py-2 rounded-full"
              >
                Comencemos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div>
            <Image
              ref={imageRef}
              src={Robot}
              alt="Robot"
              height={450}
              width={450}
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
