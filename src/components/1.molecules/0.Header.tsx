import Image from 'next/image'

const Header = () => {
    return (
        <header className="bg-SecBlue flex items-center justify-center gap-3 p-2 h-[8vh]">
            <Image src="demokratica_general/logo_titulo.svg" alt="Demokratica" width={100} height={100}/>
            <h1 className="transition-transform transform duration-200 hover:scale-110">Demokratica</h1>
        </header>
    );
};

export default Header;