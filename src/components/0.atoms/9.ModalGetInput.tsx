import { useEffect, useState } from "react";

interface ModalGetInputProps {
    type: string;
    handleSend: (val: string) => void;
    handleCancel: () => void;
}

const ModalGetInput = (props: ModalGetInputProps) => {
    
    const{ type, handleSend, handleCancel } = props;

    const [val, setVal] = useState("");
    
    useEffect(() => {
        // Bloquear el scroll del fondo
        document.body.style.overflow = "hidden";

        // Limpiar el bloqueo cuando el modal se cierre
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    
    return(
        <div className="fixed inset-0 bg-SecGray bg-opacity-50 flex items-center justify-center z-50">
            {/* Div para pointer-events-none, que anula los eventos del fondo */}
            <div className="w-[60%] md:w-[30%] h-[40vh] bg-white rounded-2xl p-4 border-2 border-AccentBlue pointer-events-none">
                <div className="flex flex-col items-center justify-center w-full h-full gap-5 pointer-events-auto">
                    <h1 className="font-semibold text-center">Ingresa tu contraseña para eliminar la cuenta</h1>
                    <input
                        type={type}
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        className="w-[80%] text-center rounded-lg border text-2xl focus:outline-none focus:ring-1 focus:ring-PrimBlack"
                    />
                    <div className="flex items-center justify-center w-full gap-5">
                        <button
                            className = "w-[30%] flex items-center justify-center rounded-md gap-2 border-2 border-PrimGray bg-SecGray p-2 hover:bg-ThirdGray" 
                            onClick = {()=>handleCancel()}
                        >
                            Cancelar
                        </button>                         
                        <button
                            className = "w-[30%] flex items-center justify-center rounded-md gap-2 border-2 border-PrimBlue bg-PrimBlue p-2 hover:bg-SecBlue" 
                            onClick = {()=>handleSend(val)}
                        >
                            Enviar
                        </button>                       
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default ModalGetInput;