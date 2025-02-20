"use client"

import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import demokraticaRoutes from "@/utils/routeUtils";
import { useRouter } from "next/navigation";

export default function AccountFormDecision() {
  
  const SessionStore = useSessionStore();
  const router = useRouter();
  const { getCookie } = useAuthContext();
  const MessageContext = useMessageContext();

  return (
    <div className="flex items-center justify-center gap-x-4 py-2 text-xl">
      {/* TODO: hover colors */}
      <SimpleButton
        buttonText="Cancelar"
        className="hover:bg-SecCasablanca bg-PrimCasablanca"
        onClick={() => {router.push(demokraticaRoutes.centroUsuario.link)}}
      />
      <SimpleButton
        buttonText="Guardar"
        className="bg-PrimCreamCan hover:bg-SecCreamCan"
        onClick={async () => {
          const result = await SessionStore.sendSessionToCreate(getCookie);        
          let news = 2;
          
          if (result.status === 201) news = 1;
          else if (result.status !== null) news = 3; // La solicitud está mal          

          MessageContext.setMessage({
            message: result.mssg,
            news: news,
            time: 3000
          })

          // TODO: La api de creación de sesión debe devolver el id de la sesión creada
          if(result.status === 201) router.push(`${demokraticaRoutes.sesion.link}/1000`) 

        }}
      />
    </div>
  );
}
