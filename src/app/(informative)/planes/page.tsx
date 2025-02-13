// Página de precios
import PreciosContainer from "@/templates/1.molecules/4.PreciosContainer";
import PreciosCard from "@/templates/0.atoms/6.PreciosCard";

const Precios = () => {
    return (
        /*Contenedor principal*/
        <div className="flex flex-col h-full w-full bg-gradient-to-b from-SecBlue to-white">
            {/*Contenedor título*/}
            <div className="flex flex-col justify-items-center items-center mt-10 xl:mt-16 xl:mb-14">
                <h1 className="text-center text-2xl italic font-extrabold">Elige tu plan, nos adaptamos a tus necesidades</h1>
            </div>
            {/*Contenedor de precios*/}
            <PreciosContainer>
                <PreciosCard/>
            </PreciosContainer>
        </div>
    );
};

export default Precios;