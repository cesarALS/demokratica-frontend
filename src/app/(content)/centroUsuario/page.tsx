"use client"

import UserCenterNewSessionButton from "@/components/0.atoms/7.UserCenterNewSessionButton";
import UserCenterSessionsBox from "@/components/3.templates/4.UserCenterSessionsBox";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { useUserCenterStore } from "@/utils/ContextProviders/UserCenterStore";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSessions } from "@/utils/apiUtils/apiSessionsUtils";
import { Session } from "@/types/sessions";

const CentroUsuario = () => {    
  
  const { setSessions, applyFilters } = useUserCenterStore();
  const { getCookie } = useAuthContext();

  // React Query para obtener sesiones con cache
  const { data: sessions = [], isLoading } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const response = await getSessions(getCookie());
      if (response.error) {
        console.error("Error obteniendo sesiones:", response.error);
      }
      return response.data;
    },
    enabled: !!getCookie(),
    staleTime: 1000 * 60, //1 minuto
  });
  

  // Actualizar Zustand cuando cambien las sesiones
  useEffect(() => {
    if (isLoading || !sessions) return;
    setSessions(sessions as Session[]);
    applyFilters();
  }, [sessions, applyFilters]);
  
  return (        
    <div className="flex flex-col items-center justify-center w-full pt-4 pb-10 gap-8">
      {/* Botón de Nueva Sesión*/ }
      <UserCenterNewSessionButton/>
      {/* Caja de Centro de Usuario */}
      <UserCenterSessionsBox/>
    </div> 
  );
}

export default CentroUsuario;