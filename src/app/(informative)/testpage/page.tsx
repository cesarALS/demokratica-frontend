/*
    Una página para probar diferentes cosas
*/


export default function Home() {
    return (
      <>
        <div className="p-2 grid place-items-center">
          <h1 
          className="font-bold transition-transform transform duration-200 hover:scale-110"
          >
            Descubre el poder del Consenso
          </h1>
          <p>Esta poderosa herramienta potenciará la productividad de tu equipo</p>
          <div className="w-[50%] grid place-items-center border-[0.1em] bg-AccentYellow gap-1 p-1">     
            <p className="font-sourcesans3">Test usando Source Sans 3.<span className="font-semibold">Así se ve la letra</span></p>
            <p className="font-ptsans">Test usando PT Sans. <span className="font-semibold">Así se ve la letra</span></p>
          </div>
        </div>      
      </>
    );
};