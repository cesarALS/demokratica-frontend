"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

interface PaginationNavBarProps {  
  dataSize?: number,
  pageSize?: number,
  currentPage?: number,
  setPage?: (currentPage: number) => void,
  panelClassname?: string,
}

export default function PaginationNavBar({
  dataSize=1, pageSize=1, currentPage=1, setPage=()=>{}, panelClassname=""
}: PaginationNavBarProps) {
      
  const numPages = Math.ceil(dataSize/pageSize);  

  return (
    <div className={`${panelClassname} flex items-center justify-between p-2 font-semibold text-PrimBlack`}>
      <button 
        className="hover:text-black"
        onClick={()=>{setPage(1)}}
      >
        Primera
      </button>
      <div className="flex items-center justify-center gap-x-1">
        <button 
          className="flex items-center justify-center"
          onClick={()=>{
            if(currentPage!==1) setPage(currentPage - 1);
          }}
        >
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="size-4 hover:text-black"
          />
        </button>
        <span className="text-base">{currentPage}</span>
        <button 
          className="flex items-center justify-center"
          onClick={() => {
            if(currentPage!==numPages) setPage(currentPage + 1);
          }}
        >
          <FontAwesomeIcon
            icon={faCaretRight}
            className="size-4 hover:text-black"
          />
        </button>
      </div>
      <button 
        className="hover:text-black"
        onClick={()=>setPage(numPages)}
      >
        Última
      </button>
    </div>
  );
}
