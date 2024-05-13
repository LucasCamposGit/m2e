import Image from "next/image";
import Header from "./components/header";
import { title } from "process";

export default function Home() {
  type Advatages = {
    title: string;
    description: string;
    img: string;
  }[];

  let advantages = [
    {
      title: "DOCUMENTAÇÃO DIGITAL",
      description:
        "Documentadas em tempo real, podendo ser acessadas através do sistema SOC",
      img: "/imgs/pc.png",
    },
    {
      title: "CLINICA PRÓPRIA E CREDENCIADA",
      description: "São mais de 700 clínicas credenciadas em todo o Brasil",
      img: "/imgs/clinic.png",
    },
    {
      title: "REDUÇÃO DE CUSTOS COM EXAMES COMPLEMENTARES",
      description:
        "Redução de 15% a 25% nos exames e análises químicas, sem aceitarmos comissões de terceiros",
      img: "/imgs/money.png",
    },
    {
      title: "REDUÇÃO DE CUSTOS COM GESTÃO DE ABSENTEÍSMO",
      description:
        "Gestão através de metodologia, com identificação tratamento de falsos absenteístas",
      img: "/imgs/money.png",
    },
    {
      title: "TREINAMENTOS IN COMPANY",
      description:
        "Treinamentos in company conduzidos por especialistas em conformidade com as normas regulamentadoras específicas.",
      img: "/imgs/teacher.png",
    },
    {
      title: "GERAÇÃO DE EVENTOS ESOCIAL",
      description:
        "Criar e enviar eventos de Segurança e Saúde do Trabalho (SST) em XML (S-2210, S-2220 e S-2240) para o eSocial.",
      img: "/imgs/esocial.png",
    },
  ];

  return (
    <main className="bg-gray-100">
      <Header />

      <section
        className="w-screen flex gap-5 
              flex-col justify-start items-start pl-20 
              pt-14 h-96 bg-white bg-contain bg-no-repeat bg-right md:bg-[url('/imgs/background.jpg')]
              relative"
      >
        <h1 className="text-5xl drop-shadow-lg">
          Gestão Inteligente
        </h1>
        <p className="text-lg drop-shadow-lg">
          Segurança e Saúde no Trabalho
        </p>

        <h2 className="rounded shadow-md bg-gray-600 bg-opacity-85 text-white absolute bottom-16 w-56 p-4 flex">
          Descubra o que podemos fazer pela sua empresa.
          <a href="#vantagens" className="flex items-center">
            <Image
              src="/imgs/right-arrow.svg"
              alt="arrow-right"
              className="ml-2 filter invert hover:filter-none"
              width={50}
              height={50}
            />
          </a>
        </h2>
      </section>

      <section className="grid grid-cols-[0.6fr_1fr] gap-2 info px-24 max-md:grid-flow-row max-md:grid-cols-1">
        <div className="flex justify-between items-start p-10 max-md:grid max-md:grid-flow-row">
          <Image
            src={"/imgs/right-simbol.png"}
            height={150}
            width={150}
            alt="right arrow"
          />
          <h1 className="mt-4 ">Quem somos</h1>
        </div>
        <div className="p-10 flex flex-col information gap-5 max-md:p-1">
          <h2 className="!mt-0 ">
            Somos uma das consultorias líderes em segurança e saúde no trabalho
            no Brasil.
          </h2>
          <p>
            Em um mundo atolado por papelada, dados e exigências legais
            intermináveis, Emerson e Mirian, dois engenheiros apaixonados por
            segurança do trabalho, ansiavam por uma forma melhor de trabalhar.
            Como líderes em suas empresas, eles estavam frustrados com a
            sobrecarga administrativa que ofuscava seu verdadeiro propósito:
            garantir a saúde e a segurança de seus colaboradores.
          </p>
          <p>
            Motivados por uma visão compartilhada, eles embarcaram em uma missão
            para transformar o SESMT (Serviço Especializado em Engenharia de
            Segurança e Medicina do Trabalho) em um processo mais eficiente e
            ágil. Durante um congresso de segurança ocupacional, uma ideia
            surgiu: &quot;E se pudéssemos usar a tecnologia para revolucionar esses
            processos?&quot;
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

      <section className="grid grid-cols-[0.6fr_1fr] gap-2 info px-24 max-md:grid-flow-row max-md:grid-cols-1 ">
        <div className="flex justify-between items-start p-10  max-md:grid max-md:grid-flow-row">
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

      <section className="grid grid-cols-3 gap-y-20 px-20 max-md:grid-flow-row max-md:grid-cols-1">
        {advantages.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-5">
              <Image
                // add a black blend to the image
                className="filter brightness-50 w-36 h-36"
                src={item.img}
                height={100}
                width={100}
                alt="right arrow"
              ></Image>
              <h1 className="text-lg text-center">{item.title}</h1>
              <span className="w-10 h-0.5 bg-orange-400 mt-5"></span>
              <p className="text-base w-72 text-center ">{item.description}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
