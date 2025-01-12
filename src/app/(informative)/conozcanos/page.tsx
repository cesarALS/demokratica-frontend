// Página de Quiénes Somos

const Who = () => {
  return (
    /*Contenedor principal de toda la página, contiene la imagen del header de la página y los recuadros con la información*/
    <div className="flex flex-col h-full w-full justify-between">
      {/*Contenedor de la imagen del header y la frase*/}
      <div className="h-80 lg:h-96 bg-[url('/img/imgHeaderConocenos.jpg')] bg-cover bg-[center_bottom_35%] flex flex-col justify-end items-end">
        <div className="bg-white/70 px-4 py-2 mb-5 rounded-md mr-5 lg:mr-20">
          <h1 className="text-black text-lg font-semibold lg:text-4xl">
            <span className="italic">Impulsamos</span> <span className="italic font-bold">decisiones</span>{" "}
            <span className="text-AccentBlue">colectivas</span>
          </h1>
        </div>
      </div>
      {/*Contenedor de los recuadros con la información*/}
      <div>
        
      </div>
    </div>
  );
};

export default Who;
