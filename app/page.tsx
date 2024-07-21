import Image from "next/image";
import Header from "./components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const advantages = [
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

      <section className="w-full flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 py-20 h-[70vh] bg-[#0f2333] bg-contain bg-no-repeat bg-right md:bg-[url('/imgs/bg.png')] relative">
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          Gestão Inteligente
        </h1>
        <p className="text-white text-xl sm:text-2xl mb-8 drop-shadow-lg">
          Segurança e Saúde no Trabalho
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScMQzRvDO6H2SMwtyqrRZoo_P7f_XT5BfuC60TRBahm2XGuKg/viewform?usp=sharing"
          className="inline-flex items-center bg-[#88d0da] text-[#0f2333] font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#5fb8c7]"
        >
          Solicite aqui seu orçamento
          <Image
            src="/imgs/right-arrow.svg"
            alt="arrow-right"
            className="ml-2 filter invert"
            width={24}
            height={24}
          />
        </a>
      </section>

      <section className="bg-[#88d0da] px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0f2333] mb-8">
            Quem somos
          </h1>
          <div className="space-y-6 text-[#0f2333]">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Somos uma das consultorias líderes em segurança e saúde no
              trabalho no Brasil.
            </h2>
            <p className="text-lg">
              Emerson e Mirian, dois engenheiros apaixonados por Saúde e
              Segurança do Trabalho, estavam frustrados com a sobrecarga
              administrativa que dificultava seu verdadeiro propósito.
            </p>
            <p className="text-lg">
              Motivados por uma visão compartilhada, decidiram transformar o
              SESMT (Serviço Especializado em Engenharia de Segurança e Medicina
              do Trabalho) em um processo mais eficiente e ágil. Durante um
              congresso de segurança ocupacional, surgiu a ideia de usar a
              tecnologia para revolucionar esses processos.
            </p>
            <p className="text-lg">
              Assim nasceu a M2E. Nossa consultoria integra tecnologia de ponta,
              modelo de gestão inovador e expertise para simplificar processos e
              elevar os padrões de segurança nas empresas. Trabalhamos com um
              escopo abrangente que inclui todas as áreas relacionadas à saúde e
              segurança no trabalho. Com uma abordagem centrada no cliente,
              ajudamos nossos clientes a focarem em seus negócios, sabendo que a
              saúde e a segurança de seus colaboradores estão em boas mãos.
            </p>
            <p className="text-lg">
              Junte-se a nós e descubra como podemos elevar a segurança e a
              saúde no trabalho em sua empresa.
            </p>

            <div className="w-screen h-20 bg-[#0f2333] -translate-x-28"></div>
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Missão</h2>
                <p className="text-lg">
                  Ser referência em soluções integradas de Saúde e Segurança do
                  Trabalho, com um time dedicado a antecipar e atender as
                  necessidades dos clientes, promovendo ambientes laborais
                  seguros e saudáveis, e agregando valor.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Visão</h2>
                <p className="text-lg">
                  Ser reconhecida nacionalmente como líder em simplificar e
                  desburocratizar a gestão de saúde e segurança no trabalho.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Valores</h2>
                <p className="text-lg">
                  Ética, Compromisso, Excelência, Inovação, Sustentabilidade.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Propósito</h2>
                <p className="text-lg">
                  Empregar conhecimento técnico e experiência para revolucionar
                  a saúde e segurança ocupacional, enquanto adotamos processos
                  ágeis para criar ambientes de trabalho seguros e saudáveis por
                  meio da tecnologia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f2333] px-6 sm:px-12 lg:px-24 py-16 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Vantagens</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Conheça algumas vantagens em ser cliente M2E.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-[#88d0da] p-6 rounded-full mb-6">
                  <Image
                    className="w-16 h-16"
                    src={item.img}
                    height={64}
                    width={64}
                    alt={item.title}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-teal-700 text-white py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold text-center mb-4">
            Entre em contato conosco!
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="font-bold">Whatsapp:</p>

              <a
                target="_blank"
                href="https://wa.me/5511917696435"
                className="underline hover:text-teal-300 flex"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 mr-2" />
                <p>(11) 91769-6435</p>
              </a>
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
              <a
                target="_blank"
                href="https://www.instagram.com/m2esolutionsst/"
                className="underline hover:text-teal-300 flex mt-2"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mr-2" />
                @m2esolutionsst
              </a>
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
