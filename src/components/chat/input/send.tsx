import { Button } from "@/components/ui/button";

export default function SendMessage() {
  return (
    <div className="p-4 border-t">
      <div className="max-w-4xl mx-auto flex gap-2">
        <div className="relative flex-1">
          <div className="pl-10 w-full bg-gray-100 border-0 text-center py-3 flex justify-center items-center">
            <p className="text-gray-600">¡Responde las preguntas!</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            className="bg-[#8A4FFF] hover:bg-[#7B45E7] text-white px-4 py-2 rounded-full"
          >
            Sí
          </Button>
          <Button
            className="bg-[#FF4B4B] hover:bg-[#D83D3D] text-white px-4 py-2 rounded-full"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}
