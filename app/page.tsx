import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Header />

      <section
        className="w-screen flex gap-5 
              flex-col justify-start items-start pl-20 
              pt-14 h-96 bg-cover bg-[url('/imgs/background.gif')]
              relative"
      >
        <h1 className="text-4xl text-white">Gestão Inteligente</h1>
        <p className="text-lg text-white">Segurança e Saúde no Trabalho</p>

        <h2 className="rounded bg-white bg-opacity-35 text-blue-100 absolute bottom-16 w-56 p-4 flex">
          Descubra o que podemos fazer pela sua empresa.
          <a href="#vantagens" className="flex items-center">
            <Image
              src="/imgs/right-arrow.svg"
              alt="arrow-right"
              className="ml-2 filter invert"
              width={50}
              height={50}
            />
          </a>
        </h2>
      </section>

      <section className="grid grid-cols-[0.6fr_1fr]  gap-2 info px-24">
        <div className="flex justify-between items-start p-10">
          <Image
            src={"/imgs/right-simbol.png"}
            height={150}
            width={150}
            alt="right arrow"
          ></Image>
          <h1 className="mt-4 whitespace-nowrap">Quem somos</h1>
        </div>
        <div className="p-10 flex flex-col information gap-5">
          <h2 className="!mt-0 ">
            Somos uma das consultorias líderes em segurança e saúde no trabalho
            no Brasil.
          </h2>
          <p>
            Fundamos a Ilitera a partir da união de profissionais com mais de 27
            anos de experiência e nos destacamos pelo assessoramento completo de
            empresas de diversos tamanhos e segmentos da indústria, comércio e
            serviços com atuação em todo o território nacional.{" "}
          </p>
          <p>
            Fundamos a Ilitera a partir da união de profissionais com mais de 27
            anos de experiência e nos destacamos pelo assessoramento completo de
            empresas de diversos tamanhos e segmentos da indústria, comércio e
            serviços com atuação em todo o território nacional.{" "}
          </p>

          <h2>Missão</h2>
          <p>
            Fortalecer empresas através da excelência em saúde e segurança
            ocupacional, otimizando processos e garantindo conformidade legal.
          </p>

          <h2>Visão</h2>
          <p>
            Ser a escolha líder mundial em soluções integradas de saúde e
            segurança ocupacional, impulsionando o crescimento sustentável e a
            prevenção de acidentes através da inovação e eficiência.
          </p>

          <h2>Valores</h2>
          <p>
            Comprometimento com a excelência, inovação continuada,
            responsabilidade social e ambiental, integridade e ética, e foco no
            cliente são os pilares que sustentam a nossa atuação.
          </p>
          <h2>Propósito</h2>
          <p>
            Empregar conhecimento técnico e experiência para revolucionar a
            saúde e segurança ocupacional, enquanto adotamos processos ágeis
            para criar ambientes de trabalho seguros e saudáveis por meio da
            tecnologia.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-[0.6fr_1fr]  gap-2 info px-24">
        <div className="flex justify-between items-start p-10">
          <Image
            src={"/imgs/right-simbol.png"}
            height={150}
            width={150}
            alt="right arrow"
          ></Image>
          <h1 className="mt-4 whitespace-nowrap">Vantagens</h1>
        </div>
        <div className="p-10 flex flex-col information gap-5">
          <h2 className="!mt-0 ">
          Conheça algumas vantagens em ser cliente M2E.
          </h2>
        </div>
      </section>
    </main>
  );
}
