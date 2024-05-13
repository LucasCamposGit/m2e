import Image from "next/image";
import Header from "../components/header";

let services: Array<Services> = [
  

];

type Services = {
  title: string;
  description: string;
  img: string;
};

export default function Services() {
  return (
    <main className="bg-gray-100">
      <Header />
      <section className={"flex justify-center items-center h-screen"}>
        <h1 className={"text-4xl font-bold text-green"}>Serviços</h1>

    
      </section>

      <section className="grid grid-cols-3 gap-y-20 px-20 max-md:grid-flow-row max-md:grid-cols-1"  >
        {services.map((item, index) => {
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