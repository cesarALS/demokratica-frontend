import SessionTypeSelector from "./SessionTypeSelector";

const SelectorList = () => {
    
    return (
        <div className="h-[6vh] w-[90%] flex items-center justify-center ">
            <SessionTypeSelector />
            <SessionTypeSelector anfitrion={false} />
        </div>
    )
}

export default SelectorList;