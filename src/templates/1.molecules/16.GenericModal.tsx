import { ReactNode, useEffect } from "react";

interface GenericModalProps {
    children: ReactNode;
    className?: string; // Permite personalizar estilos desde afuera
}

const GenericModal = ({ children, className }: GenericModalProps) => {
    
    useEffect(() => {
        // Bloquear el scroll del fondo cuando el modal está abierto
        document.body.style.overflow = "hidden";
        
        return () => {
            // Restaurar el scroll cuando el modal se cierra
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`bg-white p-5 rounded-lg shadow-lg ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default GenericModal;