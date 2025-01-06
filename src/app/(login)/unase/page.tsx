import FullLogo from '@/components/0.atoms/2.FullLogo';
import Link from 'next/link'
import { hoverScale } from '@/utils/tailwindUtils';

// Página de Registrarse

const Join = () => {
    return(
        <div className="flex items-center justify-center">
            <div className = "w-[33%] h-full">
                <Link href='/' passHref>
                  <FullLogo baseFill="#000000" classNameGeneral={`flex items-center justify-center ${hoverScale(110, 200)}`}/>  
                </Link>
                <div className = "bg-white rounded-lg p-4 h-full w-full border-black border-2">
                    <div className= "flex flex-col h-full w-[50%] justify-start p-2 gap-2">
                        <h1 className = "font-semimbold text-[1.1em]"> Regístrate: </h1>
                        <form>
                            <CustomInput labelString="Correo:" inputType="email" inputId="email" initialValue="Tu correo"></CustomInput>
                            <CustomInput labelString="Nombre de usuario:" inputType="text" inputId="username" initialValue="Tu nombre de usuario"></CustomInput>
                            <CustomInput labelString="Contraseña:" inputType="password" inputId="password" initialValue=''></CustomInput>
                            <CustomInput labelString="Confirma contraseña:" inputType="password" inputId="confirmed_password" initialValue=''></CustomInput>
                            <input className="bg-SecGray" type="checkbox"/> 
                            <label className="text-[0.6em]"> 
                                Acepto 
                                <Link href="/" className="text-blue-500 underline"> tratamiento de datos </Link>
                            </label>
                            <input className = "w-full text-center bg-PrimCreamCan border-2 border-black rounded-md text-[0.8em]" type="submit" value="Regístrese"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface CustomInputProps {
    labelString: string,
    inputType: string,  //Debería ser un enum con los valores posibles, pero me vale huevo
    inputId: string,
    initialValue: string
}
const CustomInput = ({labelString, inputType, inputId, initialValue} : CustomInputProps) => {
    return (
        <div>
            <label className="text-[0.8em] gap-2"> {labelString} </label> <br></br>
            <input className = "bg-SecGray p-1 text-SecBlack text-[0.8em] gap-2" type={inputType} id={inputId} name={inputId} defaultValue={initialValue} /> <br></br>
        </div>
    );
}
export default Join;