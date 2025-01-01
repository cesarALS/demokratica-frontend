import Image from 'next/image'
import Link from 'next/link'

// Página de Registrarse

const Join = () => {
    return(
        <div className="flex items-center justify-center">
            <div className = "w-[33%] h-full">
                <Link href='/' passHref>
                    <Image 
                        src = "demokratica_general/logo_completo.svg"
                        alt = "Logo completo de Demokratica"
                        width = {300}
                        height = {109}
                        layout = "responsive"
                        className = "object-cover transformation transition-transform duration-200 hover:scale-110 "
                    ></Image>
                </Link>
                <div className = "bg-white rounded-md p-4 h-full w-full">
                    <div className= "flex h-full w-[50%] justify-start p-2 gap-2">
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
                            <input className = "w-full text-center bg-PrimCreamCan border-2 border-black rounded-md text-[0.8em]" type="submit" value="Regístrate"></input>
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