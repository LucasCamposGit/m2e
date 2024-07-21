import Image from "next/image";
import Header from "./components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
              pt-14 h-96 bg-[#0f2333] bg-contain bg-no-repeat bg-right md:bg-[url('/imgs/background-nobg.png')]
              relative"
      >
        <h1 className="text-white text-5xl drop-shadow-lg">
          Gestão Inteligente
        </h1>
        <p className="text-white text-lg drop-shadow-lg">
          Segurança e Saúde no Trabalho
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScMQzRvDO6H2SMwtyqrRZoo_P7f_XT5BfuC60TRBahm2XGuKg/viewform?usp=sharing"
          className="flex items-center"
        >
          <h2 className="rounded shadow-md bg-gray-600 bg-opacity-85 text-white absolute bottom-16 w-56 p-4 flex">
            Solicite aqui seu orçamento
            <Image
              src="/imgs/right-arrow.svg"
              alt="arrow-right"
              className="ml-2 filter invert hover:filter-none"
              width={50}
              height={50}
            />
          </h2>
        </a>
      </section>

      <section className="bg-[#88d0da] grid grid-cols-[0.6fr_1fr] gap-2 info px-24 max-md:grid-flow-row max-md:grid-cols-1">
        <div className="flex justify-between items-start p-10 max-md:grid max-md:grid-flow-row">
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
            surgiu: &quot;E se pudéssemos usar a tecnologia para revolucionar
            esses processos?&quot;
          </p>

          <h2>Missão</h2>
          <p>
            Ser referência em soluções integradas de Saúde e Segurança do
            Trabalho, com um time dedicado a antecipar e atender as necessidades
            dos clientes, promovendo ambientes laborais seguros e saudáveis, e
            agregando valor.
          </p>

          <h2>Visão</h2>
          <p>
            Ser reconhecida nacionalmente como líder em simplificar e
            desburocratizar a gestão de saúde e segurança no trabalho.
          </p>

          <h2>Valores</h2>
          <p>Ética Compromisso Excelência Inovação Sustentabilidade.</p>

          <h2>Propósito</h2>
          <p>
            Empregar conhecimento técnico e experiência para revolucionar a
            saúde e segurança ocupacional, enquanto adotamos processos ágeis
            para criar ambientes de trabalho seguros e saudáveis por meio da
            tecnologia.
          </p>
        </div>
      </section>

      <section className="bg-[#0f2333] grid grid-cols-[0.6fr_1fr] gap-2 info px-24 max-md:grid-flow-row max-md:grid-cols-1 ">
        <div className="flex justify-between items-start p-10  max-md:grid max-md:grid-flow-row">
          <h1 className="mt-4 whitespace-nowrap text-white">Vantagens</h1>
        </div>
        <div className="p-10 flex flex-col information gap-5">
          <h2 className="!mt-0 text-white">
            Conheça algumas vantagens em ser cliente M2E.
          </h2>
        </div>
      </section>

      <section className="bg-[#88d0da] grid grid-cols-3 gap-y-20 px-20 py-16 max-md:grid-flow-row max-md:grid-cols-1">
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

      <footer className="bg-teal-700 text-white py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold text-center mb-4">Entre em contato conosco!</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start">
              <p className="font-bold">Telefone:</p>
              <p>(11) 91769-6435</p>
              <p>(19) 99614-7086</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold">E-mail comercial:</p>
              <a
                href="mailto:mirianoliveira@m2esolutionsst.onmicrosoft.com"
                className="break-all hover:underline"
              >
                mirianoliveira@m2esolutionsst.onmicrosoft.com
              </a>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold">Redes sociais:</p>
              <p>@m2esolutionsst</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://m2e.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-300"
            >
              https://m2e.vercel.app/
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
