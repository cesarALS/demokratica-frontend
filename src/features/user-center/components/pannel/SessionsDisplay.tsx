"use client"

import { useLayoutEffect, useRef, useState } from "react";

import TitleLogo from "@/components/logo/basic-assets/TitleLogo";
import LoadingScreen from "@/components/layout/LoadingScreen";
import PaginationNavBar from "@/components/layout/PaginationNavBar";

import SelectorList from "./SelectorList";
import SessionCard from "./SessionCard";

import { useUserCenterStore } from "@/features/user-center/UserCenterStore";

import { useIsFetching } from "@tanstack/react-query";
import _ from "lodash"

const SessionsDisplay = () => {        
   
    const { currentSessions, filters, currentPage, setCurrentPage } = useUserCenterStore();

    // Usamos el estado de loading ofrecido por react-query
    const isLoading = useIsFetching({ queryKey: ["sessions"] }) > 0;
        
    const [maxTitleHeight, setMaxTitleHeight] = useState("auto");
    const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    useLayoutEffect(() => {
        // Obtener las alturas de los títulos
        const heights = titleRefs.current.map(el => el?.clientHeight || 0);
        
        // Encontrar la altura máxima
        const maxHeight = Math.max(...heights);

        // Guardar la altura máxima
        setMaxTitleHeight(`${maxHeight}px`);
    }, [currentSessions]);

    return (
        <div className="flex flex-col items-center w-full">
            <SelectorList/>
            <div className="flex flex-col items-center justify-center w-full min-h-[20vh] bg-PrimBlue rounded-xl border-box p-4 md:py-8 lg:py-12">
                {isLoading ? 
                    (
                        <div className="w-[80%] h-[15vh] rounded-md">
                            <LoadingScreen 
                                fixed={false} 
                                text={"Cargando sesiones"} 
                                showText={false} 
                                scale={1.2} 
                                logo={"Title"}
                            />
                        </div>
                    ) : (                        
                        <>
                            {currentSessions.length > 0 ? (
                                <>
                                    <PaginationNavBar 
                                        dataSize={currentSessions.length}
                                        pageSize={parseInt(filters.paginationSize.current)}
                                        currentPage={currentPage}
                                        setPage={setCurrentPage}
                                        panelClassname={"bg-white rounded-md w-[90%] px-8"}
                                    />                                    
                                    <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:grid-auto-rows-[1fr] lg:grid-cols-3 w-full p-4 gap-4">                                
                                        {_.slice(
                                            currentSessions,
                                            (currentPage-1)*parseInt(filters.paginationSize.current),
                                            currentPage*parseInt(filters.paginationSize.current)
                                        )?.map((session, index) => {
                                            return (
                                                <SessionCard
                                                    id = {session.id}
                                                    key = {session.id}
                                                    titleRef={el => titleRefs.current[index] = el}
                                                    maxTitleHeight={maxTitleHeight}                                                    
                                                />
                                            )
                                        })}   
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center w-full md:w-[75%] min-h-[15vh] bg-white rounded-lg box-border p-5 text-center gap-3">
                                    <h1 className="flex-1 md:text-lg">No tienes sesiones en este apartado. ¡Crea una!</h1>
                                    <TitleLogo 
                                        classNameGeneral="flex items-center justify-center h-[8vh] md:h-[10vh] w-[80%] md:w-[50%] overflow-y-hidden overflow-x-hidden"
                                        baseFill="#000000"
                                    />
                                </div>
                            )
                            }
                        </>                                
                    )
                }           
            </div>
        </div>
    );
};

export default SessionsDisplay;

