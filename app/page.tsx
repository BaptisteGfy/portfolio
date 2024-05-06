import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-gray-400 h-full flex flex-col justify-center items-center">
      <div className="flex justify-around w-[80%] bg-red-500 flex-1 items-center">
        <p>Presentation</p>
        <p>image</p>
      </div>

      <p className="flex-1 flex justify-center items-center bg-green-500 w-[80%]">
        carousel projets
      </p>
    </main>
  );
}
