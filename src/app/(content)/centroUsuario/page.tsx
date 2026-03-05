"use client"

import { useEffect } from "react";

import NewSessionButton from "@/features/user-center/components/NewSessionButton";
import UserCenterPannel from "@/features/user-center/components/UserCenterPannel";

import { useAuthContext } from "@/features/auth/AuthProvider";
import { useUserCenterStore } from "@/features/user-center/UserCenterStore";
import { getSessions } from "@/features/session-pannel/apiCall";
import { Session } from "@/features/session-pannel/sessions";

import { queryKeys } from "@/utils/queries/reactQuery";

import { useQuery } from "@tanstack/react-query";

const CentroUsuario = () => {    
  
  const { setSessions, applyFilters } = useUserCenterStore();
  const { getCookie } = useAuthContext();

  // React Query para obtener sesiones con cache
  const { data: sessions = [], isLoading } = useQuery({
    queryKey: [queryKeys.sessions],
    queryFn: async () => {
      const response = await getSessions(getCookie());
      if (response.error) {
        console.error("Error obteniendo sesiones:", response.error);
      }
      return response.data;
    },
    enabled: !!getCookie(),
    staleTime: 1000 * 60 * 5, // Cacheo de la información por 5 minutos
  });
  

  // Actualizar Zustand cuando cambien las sesiones
  useEffect(() => {
    if (isLoading || !sessions) return;
    setSessions(sessions as Session[]);
    applyFilters();
  }, [sessions, applyFilters, isLoading, setSessions]);
  
  return (        
    <div className="flex flex-col items-center justify-center w-full pt-4 pb-10 gap-8">
      {/* Botón de Nueva Sesión*/ }
      <NewSessionButton/>
      {/* Caja de Centro de Usuario */}
      <UserCenterPannel/>
    </div> 
  );
}

export default CentroUsuario;