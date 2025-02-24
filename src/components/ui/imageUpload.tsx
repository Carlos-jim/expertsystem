"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { ImageUp } from "lucide-react";

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        setImage(event.target.result as string);
      }
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    multiple: false,
  });

  return (
    <div className="">
      <div
        {...getRootProps()}
        className={`p-6 border-2 border-dashed border-blue-500 rounded-lg ${
          isDragActive ? "border-blue-400 bg-blue-100" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Suelta la imagen aquí...</p>
        ) : (
          <div className="flex space-y-2 flex-col items-center">
            <ImageUp />
            <p className="font-semibold">
              Arrastra y suelta una imagen aquí, o haz clic para seleccionar una
            </p>
          </div>
        )}
      </div>

      {image && (
        <div className="mt-4">
          <Image
            src={image || "/placeholder.svg"}
            alt="Imagen cargada"
            width={300}
            height={300}
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
}
