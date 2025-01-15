interface PreciosContainerProps{
    children: React.ReactNode;
}

export function PreciosContainer({ children }: PreciosContainerProps) {
    return (
      <div className="py-4 px-4 mx-auto rounded-lg mt-5 mb-5 xl:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
          {children}
        </div>
      </div>
    );
  }
  
  export default PreciosContainer;