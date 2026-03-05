"use client";
import { proceedToPaymentInterface } from "../apiCall";
import { useAuthContext } from "@/features/auth/AuthProvider";
import { useMessageContext } from "@/features/messages/MessageProvider";
import demokraticaRoutes from "@/utils/routes";
import { useRouter } from "next/navigation";

import { News } from "@/features/messages/message";

interface PaymentReponse {
  url: string
}

const CheckoutButton = ({ planId }: { planId: string }) => {
  
  const { user, getCookie } = useAuthContext();
  const { setMessage } = useMessageContext();
  const router = useRouter();  

  const handlePayment = async () => {
    if (planId === "Gratuito") {     
      if (!user)router.push(demokraticaRoutes.login.link);
      else router.push(demokraticaRoutes.nuevaSesion.link);
      return;
    };    

    if(!user){
      router.push(demokraticaRoutes.login.link);
      setMessage({
        message: "Debes loguearte para acceder a esta opción",
        news: 'neutral' as News,
        time: 5000
      })
    } else {
      const res = await proceedToPaymentInterface(planId, getCookie() as string);
    
      let data = undefined;
      if(res.status === 200 && res.data) data = res.data as PaymentReponse;
      
      const url = data?.url; 
      if (!url){
        setMessage({
          message: "No se pudo abrir la pasarela de pagos. Intenta de nuevo más tarde",
          news: 'bad' as News,
          time: 5000
        });
      }   
      else window.open(url, "_blank", "width=1000,height=600");
    }     
    
  };

  return (
    <button
      onClick={handlePayment}
      className={`text-white rounded-lg p-2 mt-auto font-bold ${
        planId === "Gratuito"
          ? "bg-blue-500 hover:bg-blue-700"
          : "bg-AccentCreamCan hover:bg-PrimCreamCan"
      }`}
    >
      {planId === "Gratuito" ? "Iniciar sesión" : "Suscribirse"}
    </button>
  );
};

export default CheckoutButton;
