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
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
              { icon: faStethoscope, title: "PCMSO, PCA, PPR" },
              { icon: faHeartbeat, title: "ASO - CLÍNICO E COMPLEMENTARES" },
              { icon: faHospital, title: "GESTÃO DE CLÍNICAS CREDENCIADAS" },
              { icon: faFileAlt, title: "LTCAT E DEMAIS LAUDOS" },
              { icon: faCogs, title: "LAUDO DE ADEQUAÇÃO NR 12" },
              { icon: faClipboardList, title: "AVALIAÇÕES AMBIENTAIS" },
              { icon: faTools, title: "LOCAÇÃO DE EQUIPAMENTOS" },
              { icon: faFireExtinguisher, title: "AVCB" },
              { icon: faExclamationTriangle, title: "HAZOP" },
              { icon: faChalkboardTeacher, title: "TREINAMENTOS E PALESTRAS" },
              { icon: faUsers, title: "GESTÃO DE ABSENTEÍSMO E AFASTADOS" },
              { icon: faHardHat, title: "MÃO DE OBRA EM SST" },
              { icon: faChartLine, title: "AUTOMATIZAÇÃO DE PROCESSOS" },
              { icon: faMobileAlt, title: "APP PERSONALIZADO" },
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
