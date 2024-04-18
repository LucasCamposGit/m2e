import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <section
        className="w-screen flex gap-5 
              flex-col justify-start items-start pl-20 
              pt-14 h-96 bg-cover bg-[url('/imgs/background.gif')]"
      >
        <h1 className="text-4xl text-white">Gestão Inteligente</h1>
        <p className="text-lg text-white">Segurança e Saúde no Trabalho</p>
      </section>
    </main>
  );
}
