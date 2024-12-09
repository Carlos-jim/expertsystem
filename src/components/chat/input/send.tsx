import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function SendMessage() {
  return (
    <div className="p-4 border-t">
      <div className="max-w-4xl mx-auto flex gap-2">
        <div className="relative flex-1">
          <Input
            placeholder="Escribe algo..."
            className="pl-10 w-full bg-gray-100 border-0"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
        <Button size="icon" className="bg-[#8A4FFF] hover:bg-[#7B45E7] rounded-full">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
