import Image from "next/image";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faFileAlt,
  faChalkboardTeacher,
  faHardHat,
  faTools,
  faHeartbeat,
  faStethoscope,
  faUsers,
  faChartLine,
  faCogs,
  faFireExtinguisher,
  faMobileAlt,
  faExclamationTriangle,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

let services: Array<Services> = [];

type Services = {
  title: string;
  description: string;
  img: string;
};

export default function Services() {
  return (
    <main className="bg-gray-100">
      <Header />
      <section className="bg-teal-700 text-white p-4 sm:p-8 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 pr-0 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg">
              Nossa propósito é <span className="font-semibold">auxiliar</span>{" "}
              as empresas a <span className="font-semibold">aprimorar</span> a
              Saúde e Segurança do Trabalho, para que possam{" "}
              <span className="font-semibold">focar</span> em suas operações
              principais.
            </p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: faClipboardList, title: "PGR NR 01 E 22" },
              { icon: faHeartbeat, title: "ASO - CLÍNICO E COMPLEMENTARES" },
              { icon: faFileAlt, title: "LTCAT e DEMAIS LAUDOS" },
              { icon: faStethoscope, title: "PCMSO, PCA, PPR" },
              { icon: faChalkboardTeacher, title: "TREINAMENTOS E PALESTRAS" },
              { icon: faUsers, title: "GESTÃO DE ABSENTEÍSMO E AFASTADOS" },
              { icon: faHardHat, title: "MÃO DE OBRA EM SST" },
              { icon: faChartLine, title: "AUTOMATIZAÇÃO DE PROCESSOS" },
              { icon: faTools, title: "LOCAÇÃO DE EQUIPAMENTOS" },
              { icon: faClipboardList, title: "AVALIAÇÕES AMBIENTAS" },
              { icon: faCogs, title: "Laudo de Adequação NR 12" },
              { icon: faFireExtinguisher, title: "AVCB" },
              { icon: faMobileAlt, title: "APP personalizado" },
              { icon: faExclamationTriangle, title: "Hazop" },
              { icon: faHospital, title: "Gestão de clínicas credenciadas" },
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center bg-teal-600 p-3 rounded-lg"
              >
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-2xl w-14 h-14 mr-3"
                />
                <span className="text-sm">{service.title}</span>
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
